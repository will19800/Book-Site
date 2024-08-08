package com.example.booksite_backend.authentication;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Builder
public class AuthenticationRequest {
    private final String email;
    private final String password;

}
