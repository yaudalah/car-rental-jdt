package com.jdt.carrental.services;

import com.jdt.carrental.models.Customer;
import com.jdt.carrental.repositories.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TransactionService {
    private final DriverService driverService;
    private final CustomerService customerService;
    private final TransactionRepository transactionRepository;

    void createOrder(String customerName, String email, String phoneNumber) {
        Customer c = new Customer();
        c.setCustomerName(customerName);
        c.setEmail(email);
        c.setPhoneNumber(phoneNumber);
        
    }
}
