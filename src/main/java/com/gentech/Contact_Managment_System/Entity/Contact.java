package com.gentech.Contact_Managment_System.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="tbl_contact")
public class Contact
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="lastname")
    private String lastName;

    @Column(name="contact")
    private Long contact;

    @Column(name="email")
    private String email;

    @Column(name="address")
    private String address;

    public Contact(){

    }

    public Contact(Long id, String name, String lastName, Long contact, String email, String address) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }

    public Contact(String name, String lastName, Long contact, String email, String address) {
        this.name = name;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getContact() {
        return contact;
    }

    public void setContact(Long contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
