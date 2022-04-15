package com.jdt.carrental.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transaction_order")
public class TransactionOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction")
    private long idTransaction;

    private long idVehicle;

    private long idCustomer;

    private long idDriver;

    @Column(name = "start_hour")
    private Instant startHour;


    @Column(name = "finish_hour")
    private Instant finishHour;

    @Column(name = "order_status",nullable = false)
    @Enumerated
    private TransactionStatus orderStatus;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    enum TransactionStatus {
        ON_GOING,
        FINISH
    }
}
