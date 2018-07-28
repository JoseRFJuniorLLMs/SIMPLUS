package com.simplus.services;

import com.simplus.domain.Company;
import com.simplus.repositories.CompanyRepository;
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
