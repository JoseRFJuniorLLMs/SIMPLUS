package com.simplus.gestao.services;

import com.simplus.gestao.domain.Company;
import com.simplus.gestao.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repo;

    public List<Company> findAll() {

        return repo.findAllByOrderByName();
    }

    public List<Company> findProducts() {
        return  repo.findAll();
    }
}
