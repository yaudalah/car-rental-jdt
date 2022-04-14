package com.jdt.carrental.services;

import com.jdt.carrental.models.Driver;
import com.jdt.carrental.repositories.DriverRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DriverService {

    private final DriverRepository driverRepository;

    public boolean createDriver(Driver driver) {
        driverRepository.save(driver);
        return true;
    }
}
