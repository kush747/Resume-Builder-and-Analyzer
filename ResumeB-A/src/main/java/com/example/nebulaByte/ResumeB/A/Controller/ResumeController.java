package com.example.nebulaByte.ResumeB.A.Controller;

import com.example.nebulaByte.ResumeB.A.Dto.EnquiryRequest;
import com.example.nebulaByte.ResumeB.A.Service.ResumeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {

    private ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/generate")
    public ResponseEntity<Map<String, Object>> getResumeData(
            @RequestBody ResumeRequest resumeRequest) throws IOException {

        try {
            Map<String, Object> stringObjectMap = resumeService.generateResumeResponse(resumeRequest.userDescription());
            return new ResponseEntity<>(stringObjectMap, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

        }
    }

    @PostMapping("/sample")
    public ResponseEntity<String> sampleData() {
        return ResponseEntity.ok("Sample Data");
    }

    @PostMapping("/enquiry")
    public ResponseEntity<?> handleEnquiry(@RequestBody EnquiryRequest enquiryRequest, Authentication authentication) {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(resumeService.handleEnquiry(enquiryRequest, authentication));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
