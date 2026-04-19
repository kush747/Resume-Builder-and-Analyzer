package com.example.nebulaByte.ResumeB.A.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.nebulaByte.ResumeB.A.Dto.AuthResponse;
import com.example.nebulaByte.ResumeB.A.Dto.LoginRequest;
import com.example.nebulaByte.ResumeB.A.Dto.ResetPasswordRequest;
import com.example.nebulaByte.ResumeB.A.Dto.SingupRequest;
import com.example.nebulaByte.ResumeB.A.Entity.User;
import com.example.nebulaByte.ResumeB.A.Repository.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Transactional
    public AuthResponse signUp(SingupRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User already exists");
        }
        if (request.getName().isEmpty() || request.getEmail().isEmpty() || request.getPassword().isEmpty()) {
            throw new IllegalArgumentException("All fields are required");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("User already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("ROLE_USER");

        userRepository.save(user);
        return new AuthResponse("User registered successfully", request.getEmail());
    }

    public AuthResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            return new AuthResponse("Login successful", request.getEmail());

        } catch (BadCredentialsException e) {
            throw new RuntimeException("Invalid email or password!");
        }
    }

    public AuthResponse resetPassword(ResetPasswordRequest request) {

        String email = request.getEmail();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }
        if (request.getPassword().isEmpty() || request.getConfirmPassword().isEmpty()) {
            throw new RuntimeException("Passwords are required");
        }
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        return new AuthResponse("Password reset successful", email);
    }

}
