package com.example.booksite_backend.service;

import com.example.booksite_backend.dto.LoginDto;
import com.example.booksite_backend.email.EmailService;
import com.example.booksite_backend.entity.AppUser;
import com.example.booksite_backend.entity.ConfirmationToken;
import com.example.booksite_backend.repository.AppUserRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

// Implement an interface specifically for Spring security
@Service
@AllArgsConstructor
public class AppUserService {

    private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
    private final AppUserRepository appUserRepository;
    private final ConfirmationTokenService confirmationTokenService;
    private final BCryptPasswordEncoder passwordEncoder;

    public void enableAppUser(String email) {
        appUserRepository.enableAppUser(email);
    }

    public String signUpUser(AppUser appUser) {
        boolean userExists = appUserRepository.findByEmail(appUser.getEmail()).isPresent();

        if (userExists) {

            throw new IllegalArgumentException("Email already taken");
        }

        String encryptedPassword =  passwordEncoder.encode(appUser.getPassword());

        appUser.setPassword(encryptedPassword);

        appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );

        confirmationTokenService.saveToken(confirmationToken);

        return token;
    }
}
