package com.simplus.xls;

import com.simplus.services.CompanyService;
import com.simplus.services.ProductService;
import com.simplus.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.ByteArrayInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
@RequestMapping("/export")
public class ExportController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    @Autowired
    private CompanyService companyService;

    /**
     * Handle request to download an Excel document
     */

   // @GetMapping("/download1")//relatório com todos os produtos da empresa 1
    @RequestMapping(value="/download1", produces="application/zip")
    public String DownProduct1(Model model) {

        model.addAttribute("products", productService.findByCompany(1));

        return "";

    }

    @GetMapping("/download2")//relatório com todos os produtos da empresa 2
    public String DownProduct2(Model model) {

        model.addAttribute("products", productService.findByCompany(2));

        return "";
    }

    @GetMapping("/download1cx1")//relatório com os produtos da empresa 1 caixa
    public String DownProduct1cx(Model model) {

        model.addAttribute("products", productService.findGtln14(1));

        return "";

    }

    @GetMapping("/download2cx2")//relatório com os produtos da empresa 2 caixa
    public String DownProduct2cx(Model model) {

        model.addAttribute("products", productService.findGtln14(1));

        return "";

    }

    @GetMapping("/download1p")//relatório com os produtos da empresa 1
    public String DownProduct1p(Model model) {

        model.addAttribute("products", productService.findByCompany131());

        return "";

    }

    @GetMapping("/download2p")//relatório com os produtos da empresa 1
    public String DownProduct2p(Model model) {

        model.addAttribute("products", productService.findByCompany132());

        return "";

    }

    @GetMapping(path="/zip", produces = "application/zip")
    public ResponseEntity<InputStreamResource> zip() throws Exception {
        byte[] test = Files.readAllBytes(Paths.get(ClassLoader.getSystemResource("test.zip").toURI()));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/zip"))
                .header("Content-Disposition", "attachment; filename=test.zip")
                .body(new InputStreamResource(new ByteArrayInputStream(test)));

    }

   @GetMapping(path="/octet", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<InputStreamResource> octetStream() throws Exception {
        byte[] test = Files.readAllBytes(Paths.get(ClassLoader.getSystemResource("test.zip").toURI()));

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "attachment; filename=test.zip")
                .body(new InputStreamResource(new ByteArrayInputStream(test)));
    }

}
