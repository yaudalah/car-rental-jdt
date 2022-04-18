package com.jdt.carrental.services;

import com.jdt.carrental.models.PaymentMethod;
import com.jdt.carrental.repositories.PaymentMethodRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class PaymentMethodService {

    private final PaymentMethodRepository paymentMethodRepository;

    @Transactional
    public boolean createPaymentMethod(PaymentMethod paymentMethod) {
        List<PaymentMethod> paymentMethodList = paymentMethodRepository.findAll();
        for (PaymentMethod p: paymentMethodList) {
            if (p.getPaymentMethodName().equals(paymentMethod.getPaymentMethodName())) {
                log.error("{}",paymentMethod.getIdPaymentMethod());
                return false;
            }
        }
        paymentMethodRepository.save(paymentMethod);
        return true;
    }

    public List<PaymentMethod> getAllPaymentMethods() {
        List<PaymentMethod> paymentMethods = paymentMethodRepository.findAll();
        if (paymentMethods.isEmpty()){
            throw new ServiceException("Empy");
        }
        return paymentMethods;
    }
}
