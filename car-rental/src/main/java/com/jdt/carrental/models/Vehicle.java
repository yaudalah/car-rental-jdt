package com.jdt.carrental.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Vehicle extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vehicle")
    private long idVehicle;

    @Column(name = "vehicle_name", nullable = false)
    private String vehicleName;

    @Column(name = "vehicle_capacity", nullable = false)
    private int vehicleCapacity;

    @Column(name = "vehicle_availability", nullable = false)
    @Enumerated
    private VehicleAvailability vehicleAvailability;

    @Column(name = "price_per_hour",nullable = false)
    private BigDecimal pricePerHour;

    public enum VehicleAvailability {
        AVAILABLE,
        BOOKED
    }
}