package com.simplus.gestao.dto;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.simplus.gestao.domain.Product;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

public class ProductDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;

    @NotEmpty(message="Preenchimento obrigatório")
    @Length(min=13, max=14, message="O tamanho deve ser entre 13 e 14")
    private Long gtln;

    private String description;

    @JsonFormat(pattern="dd/MM/yyyy")
    private Date lastUpdate;

    public ProductDTO() {
    }

    public ProductDTO(Product obj) {
        id = obj.getId();
        gtln = obj.getGtin();
        description = obj.getDescription();
        lastUpdate = obj.getLastUpdate();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Long getGtln() {
        return gtln;
    }

    public void setGtln(Long gtln) {
        this.gtln = gtln;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Date getlastUpdate() {
        return lastUpdate;
    }

    public void setlastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }
}
