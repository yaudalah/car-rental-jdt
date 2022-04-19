package com.jdt.carrental.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transaction_order")
public class TransactionOrder extends BaseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction")
    private long idTransaction;

    private long idVehicle;

    private long idCustomer;

    private long idDriver;

    private long idPaymentMethod;

    @Column(name = "start_hour")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Instant startHour;

    @Column(name = "finish_hour")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Instant finishHour;

    @Column(name = "order_status",nullable = false)
    @Enumerated
    private TransactionStatus transactionStatus;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    public enum TransactionStatus {
        ON_GOING,
        FINISH
    }
}
