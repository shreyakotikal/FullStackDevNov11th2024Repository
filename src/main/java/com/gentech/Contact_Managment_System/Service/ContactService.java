package com.gentech.Contact_Managment_System.Service;

import com.gentech.Contact_Managment_System.DTO.ContactDTO;

import java.util.List;

public interface ContactService {
    ContactDTO createContact(ContactDTO contactDTO);
    void deleteContact(Long Id);
    List<ContactDTO> getAllContact();
    ContactDTO modifyContact(Long id, ContactDTO contactDTO);
    ContactDTO getContactById(Long id);

    List<ContactDTO> getContactByName(String name);
    List<ContactDTO> getContactByContact(Long contact);
    List<ContactDTO> getContactByAddress(String address);
    List<ContactDTO> getContactByEmail(String email);
}
