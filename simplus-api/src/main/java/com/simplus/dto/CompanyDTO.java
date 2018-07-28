package com.simplus.dto;

import java.io.Serializable;

import com.simplus.domain.Company;

public class CompanyDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String name;

    public CompanyDTO() {
    }

    public CompanyDTO(Company obj) {
        id = obj.getId();
        name = obj.getName();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
