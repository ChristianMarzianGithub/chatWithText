package com.chatwithtext.backend.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", produces = MediaType.TEXT_PLAIN_VALUE)
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, world!";
    }
}
