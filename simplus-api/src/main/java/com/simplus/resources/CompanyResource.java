package com.simplus.resources;

import com.simplus.domain.Company;
import com.simplus.domain.Product;
import com.simplus.dto.CompanyDTO;
import com.simplus.dto.ProductDTO;
import com.simplus.services.CompanyService;
import com.simplus.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/companys")
public class CompanyResource {

    @Autowired
    private CompanyService service;

    @Autowired
    private ProductService productService;

    @RequestMapping(method=RequestMethod.GET)//Todas as Empresas
    public ResponseEntity<List<CompanyDTO>> findAll() {
        List<Company> list = service.findAll();
        List<CompanyDTO> listDto = list.stream().map(obj -> new CompanyDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/{companyId}/products", method=RequestMethod.GET)//Todos produtos 1/2*
    public ResponseEntity<List<ProductDTO>> findProducts(@PathVariable Integer companyId) {
        List<Product> list = productService.findByCompany(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/{companyId}/gtln13", method=RequestMethod.GET)//Todos produtos 1/2* -13
    public ResponseEntity<List<ProductDTO>> findGtln13(@PathVariable Integer companyId) {
        List<Product> list = productService.findGtln13(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/{companyId}/gtln14", method=RequestMethod.GET)// Todas caixas 1/2* - 14
    public ResponseEntity<List<ProductDTO>> findGtln14(@PathVariable Integer companyId) {
        List<Product> list = productService.findGtln14(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products13", method=RequestMethod.GET)// Todos produtos de Todas Empresas
    public ResponseEntity<List<ProductDTO>> findProducts13() {
        List<Product> list = productService.findByCompany13();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }
 
    @RequestMapping(value="/products131", method=RequestMethod.GET)//Todos produtos da Empresa 1
    public ResponseEntity<List<ProductDTO>> findProducts131() {
        List<Product> list = productService.findByCompany131();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }
 
    @RequestMapping(value="/products132", method=RequestMethod.GET)//Todos os produtos da Empresa 2
    public ResponseEntity<List<ProductDTO>> findProducts132() {
        List<Product> list = productService.findByCompany132();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products131p/{companyId}", method=RequestMethod.GET)//Todos os  produtos da Empresa 1/2*
    public ResponseEntity<List<ProductDTO>> findProducts131p(@PathVariable Integer companyId) {
        List<Product> list = productService.findByCompany131p(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products132p/{companyId}", method=RequestMethod.GET)//Todos os  produtos da Empresa 1/2*
    public ResponseEntity<List<ProductDTO>> findProducts132p(@PathVariable Integer companyId) {
        List<Product> list = productService.findByCompany132p(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products14", method=RequestMethod.GET)//Todas Caixas da Empresa 1/2
    public ResponseEntity<List<ProductDTO>> findProducts14() {
        List<Product> list = productService.findByCompany14();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products141", method=RequestMethod.GET)//Todas Caixas da Empresa 1
    public ResponseEntity<List<ProductDTO>> findProducts141() {
        List<Product> list = productService.findByCompany141();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products142", method=RequestMethod.GET)//Todos Produtos da Empresa 2
    public ResponseEntity<List<ProductDTO>> findProducts142() {
        List<Product> list = productService.findByCompany142();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value="/products141p/{companyId}", method=RequestMethod.GET)//Todos Produtos da Empresa 1/2*
    public ResponseEntity<List<ProductDTO>> findProducts141p(@PathVariable Integer companyId) {
        List<Product> list = productService.findByCompany142p(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }
   
    @RequestMapping(value="/products142p/{companyId}", method=RequestMethod.GET)//Todos Produtos da Empresa 1/2*
    public ResponseEntity<List<ProductDTO>> findProducts142p(@PathVariable Integer companyId) {
        List<Product> list = productService.findByCompany142p(companyId);
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }
}

