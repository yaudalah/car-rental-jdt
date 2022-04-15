package com.jdt.carrental.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDriver;

    @Column(name = "driver_name", nullable = false)
    private String driverName;

    @Enumerated
    private DriverAvailability driverAvailability;

    public enum DriverAvailability {
        AVAILABLE,
        BOOKED
    }
}
