package com.jdt.carrental.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;

@Getter
@Setter
public class TransactionDTO {
    @Id
    private long idTransaction;
    private long idDriver;
    private long idCustomer;

}
