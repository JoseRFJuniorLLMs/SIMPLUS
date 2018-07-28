package com.simplus.services;

import com.simplus.domain.Product;
import com.simplus.repositories.ProductRepository;
import com.simplus.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public Product find(Integer id) {
        Optional<Product> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Product.class.getName()));
    }

    public Page<Product> search(Integer page, Integer linesPerPage, String orderBy, String direction) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
         return repo.findAll(pageRequest);
    }

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
