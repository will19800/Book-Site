package com.example.booksite_backend.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class LoginDto {
    private final String email;
    private final String password;

}
