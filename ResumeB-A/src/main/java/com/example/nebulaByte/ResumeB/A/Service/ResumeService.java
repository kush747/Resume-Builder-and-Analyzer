package com.example.nebulaByte.ResumeB.A.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.nebulaByte.ResumeB.A.Dto.EnquiryRequest;
import com.example.nebulaByte.ResumeB.A.Entity.User;
import com.example.nebulaByte.ResumeB.A.Entity.UserQueries;
import com.example.nebulaByte.ResumeB.A.Repository.UserQueryRepository;
import com.example.nebulaByte.ResumeB.A.Repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ResumeService {

    @Autowired
    private JavaMailSender mailSender;

    private ModelMapper modelMapper;
    private ChatClient chatClient;

    private final UserQueryRepository userQueryRepository;

    private final UserRepository userRepository;

    public ResumeService(ChatClient.Builder builder, UserQueryRepository userQueryRepository,
            UserRepository userRepository, ModelMapper modelMapper) {
        this.chatClient = builder.build();
        this.userQueryRepository = userQueryRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    // public Map<String, Object> generateResumeResponse(String
    // userResumeDescription) throws IOException {

    // String promptString = this.LoadPromptFromFile("resume_prompt.txt");

    // String promptContent = this.putValuesToTemplate(promptString, Map.of(
    // "userDescription", userResumeDescription
    // ));
    // Prompt prompt = new Prompt(promptContent);
    // String response = chatClient
    // .prompt(prompt)
    // .call()
    // .content();

    // Map<String, Object> stringObjectMap = parseMultipleResponses(response);
    // //modify :
    // return stringObjectMap;
    // }

    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {

        String promptString = this.LoadPromptFromFile("resume_prompt.txt");

        Map<String, String> values = new HashMap<>();
        values.put("userDescription", userResumeDescription);

        String promptContent = this.putValuesToTemplate(promptString, values);

        Prompt prompt = new Prompt(promptContent);

        String response = chatClient
                .prompt(prompt)
                .call()
                .content();

        Map<String, Object> stringObjectMap = parseMultipleResponses(response);

        return stringObjectMap;
    }

    String LoadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);

    }

    String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {

            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());

        }
        return template;
    }

    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        // Extract content inside <think> tags
        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        if (thinkStart != -1 && thinkEnd != -1) {
            String thinkContent = response.substring(thinkStart, thinkEnd).trim();
            jsonResponse.put("think", thinkContent);
        } else {
            jsonResponse.put("think", null); // Handle missing <think> tags
        }

        // Extract content that is in JSON format
        int jsonStart = response.indexOf("```json") + 7; // Start after ```json
        int jsonEnd = response.lastIndexOf("```"); // End before ```
        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                // Convert JSON string to Map using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null);
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", null);
        }
        return jsonResponse;
    }

    public Object handleEnquiry(
            EnquiryRequest enquiryRequest,
            Authentication authentication) {

        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        UserQueries userQueries = modelMapper.map(enquiryRequest, UserQueries.class);
        userQueries.setUser(user);
        userQueryRepository.save(userQueries);
        SendEmailNotification(enquiryRequest);
        return "Enquiry saved successfully and confirmation mail has been sent to your email";

    }

    private void SendEmailNotification(EnquiryRequest enquiryRequest){
        SimpleMailMessage UserMessage = new SimpleMailMessage();
        UserMessage.setFrom("[EMAIL_ADDRESS]");
        UserMessage.setTo(enquiryRequest.getEmail());
        UserMessage.setSubject("Enquiry Confirmation");
        UserMessage.setText("Dear " + enquiryRequest.getName() + ",\n\nThank you for your enquiry. We will get back to you soon.");
        mailSender.send(UserMessage);

        SimpleMailMessage AdminMessage = new SimpleMailMessage();
        AdminMessage.setFrom("[EMAIL_ADDRESS]");
        AdminMessage.setTo("[EMAIL_ADDRESS]");  
        AdminMessage.setSubject("New Enquiry");
        AdminMessage.setText("You have received a new enquiry from " + enquiryRequest.getName() + ".\n\n" + enquiryRequest.getMessage());
        mailSender.send(AdminMessage);
    }
}