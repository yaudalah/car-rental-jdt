package com.jdt.carrental.services;

import com.jdt.carrental.models.Vehicle;
import com.jdt.carrental.repositories.VehicleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    @Transactional
    public boolean createVehicle(Vehicle vehicle) {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        if (vehicles.equals(vehicle.getVehicleName())){
            return false;
        }
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
