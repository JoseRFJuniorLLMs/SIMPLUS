package com.simplus.gestao.dto;

import com.simplus.gestao.domain.User;

import java.io.Serializable;

public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String firstname;
    private String lastname;
    private String email;


    public UserDTO() {
    }

    public UserDTO(User obj) {
        id = obj.getId();
        firstname = obj.getFirstName();
        lastname = obj.getLastName();
        email = obj.getEmail();

    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
