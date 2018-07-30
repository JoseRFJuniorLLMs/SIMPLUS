package com.simplus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class SimplusApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimplusApplication.class, args);
	}
}
