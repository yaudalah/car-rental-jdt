package com.jdt.carrental.dto;

import com.jdt.carrental.models.TransactionOrder;
import lombok.Getter;
import lombok.Setter;


import java.time.Instant;
import java.util.Date;

@Getter
@Setter
public class TransactionDTO {

    private long idTransaction;
    private long idDriver;
    private long idVehicle;
    private long idPaymentMethod;
    //customer
    private String customerName;
    private String email;
    private String phoneNumber;
    //transaction
    private Date startHour;
    private Date finishHour;

    private TransactionOrder.TransactionStatus transactionStatus;

}
