package com.jdt.carrental.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_payment_method")
    private long idPaymentMethod;

    @Column(name = "payment_method_name")
    private String paymentMethodName;

    @Column(name = "no_rek")
    private String noRek;
}
