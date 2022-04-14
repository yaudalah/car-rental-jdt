package com.jdt.carrental.models;

import javax.persistence.*;

@Entity

public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDriver;

    @Column(name = "driver_name", nullable = false)
    private String driverName;
}
