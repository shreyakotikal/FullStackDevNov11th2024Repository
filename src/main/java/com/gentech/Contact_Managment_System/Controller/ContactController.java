package com.gentech.Contact_Managment_System.Controller;
import com.gentech.Contact_Managment_System.DTO.ContactDTO;
import com.gentech.Contact_Managment_System.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//http://localhost:9091/swagger-ui/index.html  ---------------->Swagger


@RestController
@RequestMapping("api/v1")
public class ContactController
{
    @Autowired
    private ContactService contactService;


    //http://localhost:9091/api/v1/addContact
    @PostMapping("/addContact")
    public ResponseEntity<ContactDTO> addContact(@RequestBody ContactDTO contactDTO)
    {
        ContactService service;
        return new ResponseEntity<>(contactService.createContact(contactDTO), HttpStatus.CREATED);
    }

    //http://localhost:9091/api/v1/deleteSpecificContact
    @DeleteMapping("/deleteSpecificContact")
    public ResponseEntity<String>deleteSpecificContact(@PathVariable Long Id)
    {
        contactService.deleteContact(Id);
        return new ResponseEntity<>("The Contact with Id "+Id+" has not found in the database",HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getContactById/{id}
    @GetMapping("/getContactById/{id}")
    public ResponseEntity<ContactDTO> getContactById(@PathVariable Long id)
    {
        return new ResponseEntity<>(contactService.getContactById(id), HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/modifyContact/{id}
    @PutMapping("/modifyContact/{id}")
    public ResponseEntity<ContactDTO> modifyContact(@PathVariable Long id, @RequestBody ContactDTO contactDTO)
    {
        return new ResponseEntity<>(contactService.modifyContact(id, contactDTO), HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getAllContact
    @GetMapping("/getAllContact")
    public ResponseEntity<List<ContactDTO>> getAllContact()
    {
        return new ResponseEntity<>(contactService.getAllContact(),HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getAllContactByName?name=
    @GetMapping("/getAllContactByName")
    public ResponseEntity<List<ContactDTO>> getAllContactByName(@RequestParam String name)
    {
        return new ResponseEntity<>(contactService.getContactByName(name),HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getAllContactByContact?contact=
    @GetMapping("/getAllContactByContact")
    public ResponseEntity<List<ContactDTO>> getAllContactByContact(@RequestParam Long contact)
    {
        return new ResponseEntity<>(contactService.getContactByContact(contact),HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getAllContactByAddress?address=
    @GetMapping("/getAllContactByAddress")
    public ResponseEntity<List<ContactDTO>> getAllContactByAddress(@RequestParam String address)
    {
        return new ResponseEntity<>(contactService.getContactByAddress(address),HttpStatus.OK);
    }

    //http://localhost:9091/api/v1/getAllContactByEmail?email=
    @GetMapping("/getAllContactByEmail")
    public ResponseEntity<List<ContactDTO>> getAllContactByEmail(@RequestParam String email)
    {
        return new ResponseEntity<>(contactService.getContactByEmail(email),HttpStatus.OK);
    }

}
