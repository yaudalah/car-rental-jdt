package com.jdt.carrental.services;

import com.jdt.carrental.dto.LoginDTO;
import com.jdt.carrental.models.Customer;
import com.jdt.carrental.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public boolean createAccountCustomer(Customer customer) {
        List<Customer> daftarCustomer = customerRepository.findAll();
        for (Customer c : daftarCustomer) {
            if (c.getEmail().equals(customer.getEmail())) {
                log.info("Akun pelanggan dengan email {} telah terdaftar", customer.getEmail());
                return false;
            }
        }
        customerRepository.save(customer);
        log.info("Akun pelanggan dengan nama {} telah terbuat", customer.getCustomerName());
        return true;
    }

    public Object login(LoginDTO loginDTO) {
        Customer cariCustomer = customerRepository.findByEmail(loginDTO.getEmail())
                .orElse(null);
        if (cariCustomer != null) {
            if (cariCustomer.getPassword().equals(loginDTO.getPassword())) {
                LoginDTO CustomerDTO = new LoginDTO();
                CustomerDTO.setEmail(cariCustomer.getEmail());
                CustomerDTO.setPassword(cariCustomer.getPassword());
                log.info("Akun Customer dengan email {} telah login", loginDTO.getEmail());
                return CustomerDTO;
            }
        }
        return false;
    }

}
