package com.jdt.carrental.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
public class TransactionDTORes {
    //payment
    private String paymentMethodName;
    private String noRek;
    //vehicle
    private String vehicleName;
    private BigDecimal pricePerHour;
    //driver
    private String driverName;
    //customer
    private String customerName;
    private String email;
    private String phoneNumber;
    //transaction
    private Date startHour;
    private Date finishHour;
    private BigDecimal totalPrice;
}
