package com.simplus.gestao.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.simplus.gestao.domain.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

    @Transactional(readOnly=true)
    public List<Company> findAllByOrderByName();
}
