package com.gentech.Contact_Managment_System.ServiceImplementation;

import com.gentech.Contact_Managment_System.DTO.ContactDTO;
import com.gentech.Contact_Managment_System.Entity.Contact;
import com.gentech.Contact_Managment_System.Mapper.ContactMapper;
import com.gentech.Contact_Managment_System.Repository.ContactRepository;
import com.gentech.Contact_Managment_System.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactImplementation implements ContactService
{
    @Autowired
    private ContactRepository contactRepository;

    @Override
    public ContactDTO createContact(ContactDTO contactDTO)
    {
        Contact contact= ContactMapper.mapToContact(contactDTO);
        Contact savedContact=contactRepository.save(contact);
        return ContactMapper.mapToContactDTO(savedContact);

    }

    @Override
    public void deleteContact(Long Id)
    {
        contactRepository.findById(Id).orElseThrow(() ->new RuntimeException("The Contact with Id "+Id+" has Not Found in the Database"));
        contactRepository.deleteById(Id);

    }

    @Override
    public List<ContactDTO> getAllContact() {
        return contactRepository.findAll().stream().map((Contact )
                ->ContactMapper.mapToContactDTO(Contact)).collect(Collectors.toList());

    }

    @Override
    public ContactDTO modifyContact(Long id, ContactDTO contactDTO) {
        Contact contact=contactRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Contact with id "+id+" has not found in the database!!!"));
        contact.setName(contactDTO.getName());
        contact.setLastName(contactDTO.getLastName());
        contact.setContact(contactDTO.getContact());
        contact.setAddress(contactDTO.getAddress());
        contact.setEmail(contactDTO.getEmail());

        Contact savedContact=contactRepository.save(contact);

        return ContactMapper.mapToContactDTO(savedContact);
    }

    @Override
    public ContactDTO getContactById(Long id) {
        Contact contact=contactRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Contact with id "+id+" has not found in the database!!!"));
        return ContactMapper.mapToContactDTO(contact);
    }

    @Override
    public List<ContactDTO> getContactByName(String name) {
        List<Contact> contacts=contactRepository.findByName(name);
        if(contacts.isEmpty())
        {
            throw new RuntimeException("Contact with Name "+name+" does not exist");
        }
        return contacts.stream().map((contact )
                ->ContactMapper.mapToContactDTO(contact)).collect(Collectors.toList());
    }

    @Override
    public List<ContactDTO> getContactByContact(Long contact) {
        List<Contact> contacts=contactRepository.findByContact(contact);
        if(contacts.isEmpty())
        {
            throw new RuntimeException("Contact with Contact "+contact+" does not exist");
        }
        return contacts.stream().map((contact1 )
                ->ContactMapper.mapToContactDTO(contact1)).collect(Collectors.toList());
    }

    @Override
    public List<ContactDTO> getContactByAddress(String address) {
        List<Contact> contacts=contactRepository.findByAddress(address);
        if(contacts.isEmpty())
        {
            throw new RuntimeException("Contact with Address "+address+" does not exist");
        }
        return contacts.stream().map((contact )
                ->ContactMapper.mapToContactDTO(contact)).collect(Collectors.toList());
    }

    @Override
    public List<ContactDTO> getContactByEmail(String email) {
        List<Contact> contacts=contactRepository.findByEmail(email);
        if(contacts.isEmpty())
        {
            throw new RuntimeException("Contact with Email "+email+" does not exist");
        }
        return contacts.stream().map((contact )
                ->ContactMapper.mapToContactDTO(contact)).collect(Collectors.toList());
    }
}
