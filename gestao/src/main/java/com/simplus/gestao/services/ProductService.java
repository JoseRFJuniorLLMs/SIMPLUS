package com.simplus.gestao.services;

import com.simplus.gestao.domain.Product;
import com.simplus.gestao.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public List<Product> findByCompany(Integer companyId) {

        return repo.findProducts(companyId);
    }

    public List<Product> findGtln13(Integer companyId) {

        return repo.findGtln13(companyId);
    }

    public List<Product> findGtln14(Integer companyId) {

        return repo.findGtln14(companyId);
    }

    public List<Product> findByCompany13() {

        return repo.findAllBy13();
    }

    public List<Product> findByCompany131p(Integer companyId) {

        return repo.findAllBy131p(companyId);
    }

    public List<Product> findByCompany132p(Integer companyId) {

        return repo.findAllBy132p(companyId);
    }

    public List<Product> findByCompany131() {

        return repo.findAllBy131();
    }

    public List<Product> findByCompany132() {

        return repo.findAllBy132();
    }


    public List<Product> findByCompany14() {

        return repo.findAllBy14();
    }

    public List<Product> findByCompany141() {

        return repo.findAllBy141();
    }

    public List<Product> findByCompany142() {

        return repo.findAllBy142();
    }

    public List<Product> findByCompany141p(Integer companyId) {

        return repo.findAllBy141p(companyId);
    }

    public List<Product> findByCompany142p(Integer companyId) {

        return repo.findAllBy142p(companyId);
    }

    public List<Product> findAll() {

        return repo.findAll();
    }

}
