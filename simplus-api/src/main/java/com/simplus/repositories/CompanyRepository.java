package com.simplus.repositories;

import java.util.List;

import com.simplus.domain.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

    @Transactional(readOnly=true)
    public List<Company> findAllByOrderByName();
}
