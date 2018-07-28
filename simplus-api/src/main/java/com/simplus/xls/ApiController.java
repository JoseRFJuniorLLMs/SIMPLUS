package com.simplus.xls;

import com.simplus.domain.Product;
import com.simplus.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {

    @Autowired
    private ProductService productService;

    //@RequestMapping(value = "/api/", method = RequestMethod.GET)
    public  List<Product> viewXLS() {

        return  productService.findAll();

    }


}
