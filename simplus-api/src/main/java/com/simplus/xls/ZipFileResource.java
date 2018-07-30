package com.simplus.xls;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//@Controller
@RequestMapping("/test")
public class ZipFileResource {

    @GetMapping(path="/zip", produces = "application/zip")
    public ResponseEntity<InputStreamResource> zip() throws Exception {
        byte[] test = Files.readAllBytes(Paths.get(ClassLoader.getSystemResource("test.zip").toURI()));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/zip"))
                .header("Content-Disposition", "attachment; filename=test.zip")
                .body(new InputStreamResource(new ByteArrayInputStream(test)));
    }


    // It works both in url and swagger-ui
    @GetMapping(path="/octet", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<InputStreamResource> octetStream() throws Exception {
        byte[] test = Files.readAllBytes(Paths.get(ClassLoader.getSystemResource("test.zip").toURI()));

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "attachment; filename=test.zip")
                .body(new InputStreamResource(new ByteArrayInputStream(test)));
    }
}