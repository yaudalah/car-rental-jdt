package com.jdt.carrental.services;

import com.jdt.carrental.models.Driver;
import com.jdt.carrental.repositories.DriverRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class DriverService {

    private final DriverRepository driverRepository;

    public void createDriver(Driver driver) {
        driverRepository.save(driver);
        log.info("Akun driver dengan nama {} telah terbuat", driver.getDriverName());
    }

    public Object getAllDrivers() {
        //show only available driver
        List<Driver> drivers = driverRepository.findAll();
        List<Driver> results = new ArrayList<>();
        if (drivers.isEmpty()) {
            return false;
        }
        for (Driver d: drivers) {
            if (d.getDriverAvailability() == Driver.DriverAvailability.AVAILABLE) {
                results.add(d);
            }
        }
        return results;
    }
}
