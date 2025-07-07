package com.gentech.Contact_Managment_System.DTO;

public class ContactDTO
{
    private Long id;
    private String name;
    private String lastName;
    private Long contact;
    private String email;
    private String address;

    public ContactDTO()
    {

    }

    public ContactDTO(Long id, String name, String lastName, Long contact, String email, String address) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }

    public ContactDTO(String name, String lastName, Long contact, String email, String address) {
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
