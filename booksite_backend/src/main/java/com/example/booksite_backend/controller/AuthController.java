package com.example.booksite_backend.controller;

import com.example.booksite_backend.dto.RegistrationDto;
import com.example.booksite_backend.service.AuthService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final static Logger log = LoggerFactory.getLogger(AuthController.class);

//    @GetMapping(path = "login")
//    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
//        log.debug("Login request received for email: {}", loginDto.getEmail());
//        return registrationService.loginUser(loginDto);


    @PostMapping(path = "register")
    public String register(@RequestBody RegistrationDto request) {
        return authService.register(request);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return authService.confirmToken(token);
    }
}

