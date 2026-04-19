package com.example.nebulaByte.ResumeB.A.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResetPasswordRequest {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "New password is required")
    private String password;

    @NotBlank(message = "Confirm password is required")
    private String confirmPassword;
}
