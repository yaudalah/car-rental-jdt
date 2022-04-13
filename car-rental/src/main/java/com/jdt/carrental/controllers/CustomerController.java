package com.jdt.carrental.controllers;

import com.jdt.carrental.dto.LoginDTO;
import com.jdt.carrental.models.Customer;
import com.jdt.carrental.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/create-account")
    public ResponseEntity<Object> createAccountCustomer(@RequestBody Customer data) {
        Object dataCustomer = customerService.createAccountCustomer(data);
        if (dataCustomer.equals(false)) {
            return new ResponseEntity<>("Akun sudah ada",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Akun berhasil dibuat",HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDTO data) {
        Object dataCustomer = customerService.login(data);
        if (dataCustomer.equals(false)) {
            return new ResponseEntity<>("Password / Akun salah",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("berhasil login",HttpStatus.OK);
    }

}
