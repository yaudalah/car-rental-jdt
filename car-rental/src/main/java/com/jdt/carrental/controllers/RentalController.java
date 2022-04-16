package com.jdt.carrental.controllers;

import com.jdt.carrental.dto.TransactionDTO;
import com.jdt.carrental.services.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/order")
public class RentalController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<TransactionDTO> createOrder(@RequestBody TransactionDTO transactionDTO) {
       TransactionDTO dataTransactionDTO = transactionService.createOrder(transactionDTO);
       if (dataTransactionDTO.equals(false)){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
       return new ResponseEntity<>(dataTransactionDTO,HttpStatus.CREATED);
    }
}
