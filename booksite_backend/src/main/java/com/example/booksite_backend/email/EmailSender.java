package com.example.booksite_backend.email;

public interface EmailSender {
    void send(String to, String email);
}
