package com.jdt.carrental.controllers;

import com.jdt.carrental.dto.TransactionDTO;
import com.jdt.carrental.dto.TransactionDTORes;
import com.jdt.carrental.dto.map.OrderDetailsMap;
import com.jdt.carrental.services.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/order")
public class RentalController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Object> createOrder(@RequestBody TransactionDTO transactionDTO) {
        TransactionDTORes dataTransactionDTO = transactionService.createOrder(transactionDTO);
       if (dataTransactionDTO.equals(false)){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
       return new ResponseEntity<>(dataTransactionDTO,HttpStatus.CREATED);
    }

    @GetMapping("/get-all-on-going-transaction")
    public ResponseEntity<List<OrderDetailsMap>> getAllOnGoingTransaction(){
        return new ResponseEntity<List<OrderDetailsMap>>(transactionService.findAllOnGoingTransaction(),HttpStatus.OK);
    }

    @PostMapping("/finish-order/{id}")
    public ResponseEntity< List<OrderDetailsMap>> finishOrder(@PathVariable("id") Long idTrans){
      List<OrderDetailsMap> result = transactionService.finishTransaction(idTrans);
        return new ResponseEntity< List<OrderDetailsMap>>(result,HttpStatus.OK);
    }

    @GetMapping("/history")
    public ResponseEntity<List<OrderDetailsMap>> getAllTransactionHistory(){
      return new ResponseEntity<List<OrderDetailsMap>>(transactionService.findAllTransactionHistory(),HttpStatus.OK);
    }
}
