package com.example.booksite_backend.email;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;
import java.util.regex.Pattern;

@Service
public class EmailValidator implements Predicate<String> {

    private static final Pattern emailRegex = Pattern.compile(
            "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
            Pattern.CASE_INSENSITIVE);

    @Override
    public boolean test(String email) {
        return emailRegex.matcher(email).matches();
    }
}
