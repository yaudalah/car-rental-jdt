package com.jdt.carrental.controllers;

import com.jdt.carrental.models.PaymentMethod;
import com.jdt.carrental.services.PaymentMethodService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/api/v1/payment-method")
public class PaymentController {
    
    private final PaymentMethodService paymentMethodService;

    @PostMapping("/create-payment-method")
    public ResponseEntity<Object> createPayment(@RequestBody PaymentMethod paymentMethod) {
        Object dataPayment = paymentMethodService.createPaymentMethod(paymentMethod);
        if (dataPayment.equals(false)) {
            return new ResponseEntity<>(dataPayment,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(dataPayment, HttpStatus.CREATED);
    }
    
    @ResponseBody
    @GetMapping("/get-all-payment-methods")
    public ResponseEntity<List<PaymentMethod>> getAllPayments() {
        List<PaymentMethod> paymentMethods = paymentMethodService.getAllPaymentMethods();
        if (paymentMethods.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(paymentMethods, HttpStatus.OK);
    }
}
