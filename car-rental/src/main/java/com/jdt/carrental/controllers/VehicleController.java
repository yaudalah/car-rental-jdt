package com.jdt.carrental.controllers;

import com.jdt.carrental.models.Vehicle;
import com.jdt.carrental.services.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/vehicle")
public class VehicleController {

    private final VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<Object> createVehicle(@RequestBody Vehicle vehicle) {
        Object dataVehicle = vehicleService.createVehicle(vehicle);
        if (dataVehicle.equals(false)) {
            return new ResponseEntity<>(dataVehicle,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(dataVehicle, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getVehicleById(@PathVariable("id") Long id) {
        Object dataVehicle = vehicleService.getVehicleById(id);
        if(dataVehicle.equals(false)) {
            return new ResponseEntity<>("mobil tidak ditemukan",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(dataVehicle,HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/all-vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehiclses() {
        List<Vehicle> vehicleDTOS = vehicleService.getAllAvailableVehicles();
        return new ResponseEntity<>(vehicleDTOS,HttpStatus.OK);
    }
}
