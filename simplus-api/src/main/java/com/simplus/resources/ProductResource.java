package com.simplus.resources;


import com.simplus.domain.Product;
import com.simplus.dto.ProductDTO;
import com.simplus.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/products")
public class ProductResource {

    @Autowired
    private ProductService productService;

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Product> find(@PathVariable Integer id) {
        Product obj = productService.find(id);
        return ResponseEntity.ok().body(obj);
    }

   /* @ResponseBody
    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<ProductDTO>> findAll(){
        List<Product> list = productService.findAll();
        List<ProductDTO> listDto = list.stream().map(obj -> new ProductDTO(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }*/

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Page<ProductDTO>> findPage(
            @RequestParam(value="page", defaultValue="0") Integer page,
            @RequestParam(value="linesPerPage", defaultValue="5") Integer linesPerPage,
            @RequestParam(value="orderBy", defaultValue="id") String orderBy,
            @RequestParam(value="direction", defaultValue="ASC") String direction) {
        Page<Product> list = productService.search(page, linesPerPage, orderBy, direction);
        Page<ProductDTO> listDto = list.map(obj -> new ProductDTO(obj));
        return ResponseEntity.ok().body(listDto);
    }
}
