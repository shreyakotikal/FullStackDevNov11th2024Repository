package com.gentech.Contact_Managment_System.Repository;

import com.gentech.Contact_Managment_System.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact,Long>
{
    List<Contact> findByName(String name);
    List<Contact> findByLastName(String lastName);
    List<Contact> findByContact(Long contact);
    List<Contact> findByEmail(String email);
    List<Contact> findByAddress(String address);

}
