package com.jdt.carrental.services;

import com.jdt.carrental.models.Vehicle;
import com.jdt.carrental.repositories.VehicleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Slf4j
@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public boolean createVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
        return true;
    }

    public Object getVehicleById(long id) {
        Vehicle vehicle = vehicleRepository.findById(id).orElse(null);
        if (vehicle != null) {
            return vehicle;
        } else {
            return false;
        }
    }

    public List<Vehicle> getAllAvailableVehicles() {
        //show only available car
        List<Vehicle> vehicles =  vehicleRepository.findAll();
        List<Vehicle> results = new ArrayList<>();
        for (Vehicle v: vehicles) {
            if (v.getVehicleAvailability().equals(Vehicle.VehicleAvailability.AVAILABLE)) {
                results.add(v);
            }
        }
        return results;
    }

}
