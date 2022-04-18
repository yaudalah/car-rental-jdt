package com.jdt.carrental.controllers;

import com.jdt.carrental.models.Driver;
import com.jdt.carrental.services.DriverService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/driver")
public class DriverController {

    private final DriverService driverService;

    @PostMapping("/create-driver")
    public ResponseEntity<String> createDriver(@RequestBody Driver driver) {
        driverService.createDriver(driver);
        return new ResponseEntity<String>("driver created",HttpStatus.CREATED);
    }

    @GetMapping("/get-all-drivers")
    public ResponseEntity<Object> getDrivers() {
        Object dataDrivers = driverService.getAllDrivers();
        if (dataDrivers.equals(false)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(dataDrivers, HttpStatus.OK);
    }
}
