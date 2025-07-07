package com.gentech.Contact_Managment_System.Mapper;

import com.gentech.Contact_Managment_System.DTO.ContactDTO;
import com.gentech.Contact_Managment_System.Entity.Contact;

public class ContactMapper
{
    public static ContactDTO mapToContactDTO(Contact contact)
    {
        ContactDTO contactDTO=new ContactDTO(
                contact.getId(),
                contact.getName(),
                contact.getLastName(),
                contact.getContact(),
                contact.getEmail(),
                contact.getAddress()
        );
        return contactDTO;
    }

    public static Contact mapToContact(ContactDTO contactDTO)
    {
        Contact contact=new Contact(
                contactDTO.getId(),
                contactDTO.getName(),
                contactDTO.getLastName(),
                contactDTO.getContact(),
                contactDTO.getEmail(),
                contactDTO.getAddress()
        );
        return contact;
    }
}
