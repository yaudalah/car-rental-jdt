package com.jdt.carrental.services;

import com.jdt.carrental.dao.TransactionDao;
import com.jdt.carrental.dto.TransactionDTO;
import com.jdt.carrental.dto.TransactionDTORes;
import com.jdt.carrental.dto.map.OrderDetailsMap;
import com.jdt.carrental.models.*;
import com.jdt.carrental.repositories.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class TransactionService {
    private final DriverRepository driverRepository;
    private final CustomerRepository customerRepository;
    private final VehicleRepository vehicleRepository;
    private final PaymentMethodRepository paymentMethodRepository;
    private final TransactionRepository transactionRepository;
    private final TransactionDao transactionDao;

    @Transactional
    public TransactionDTORes createOrder(TransactionDTO transactionDTO) {

        Customer customer = new Customer();
        Driver driver = new Driver();
        Vehicle vehicle = vehicleRepository.findById(transactionDTO.getIdVehicle()).orElse(null);

        PaymentMethod paymentMethod = paymentMethodRepository.findById(transactionDTO
                .getIdPaymentMethod()).orElse(null);
        assert paymentMethod != null;

        TransactionOrder transactionOrder = new TransactionOrder();
        if (transactionDTO.getIdDriver() != 0) {
            transactionOrder.setIdDriver(transactionDTO.getIdDriver());
        }
        assert vehicle != null;
        transactionOrder.setIdVehicle(vehicle.getIdVehicle());
        transactionOrder.setIdPaymentMethod(paymentMethod.getIdPaymentMethod());
        transactionOrder.setIdCustomer(customer.getIdCustomer());
        transactionOrder.setStartHour(transactionDTO.getStartHour());
        transactionOrder.setFinishHour(transactionDTO.getFinishHour());
        transactionOrder.setTransactionStatus(TransactionOrder.TransactionStatus.ON_GOING);
        transactionOrder.setTotalPrice(
                BigDecimal.valueOf(
                    Duration.between(transactionDTO.getStartHour(), transactionDTO.getFinishHour())
                    .toMinutes() / 60
                ).multiply(vehicle.getPricePerHour())
        );
        if (transactionDTO.getFinishHour().isAfter(transactionDTO.getStartHour())) {

            // save customer
            customer.setIdCustomer(UUID.randomUUID().getLeastSignificantBits());
            customer.setCustomerName(transactionDTO.getCustomerName());
            customer.setEmail(transactionDTO.getEmail());
            customer.setPhoneNumber(transactionDTO.getPhoneNumber());
            customerRepository.save(customer);

            // change driver availability
            if (transactionDTO.getIdDriver() != 1) {
                driver = driverRepository.findById(transactionDTO.getIdDriver()).orElse(null);
                if (driver != null) {
                    driver.setDriverAvailability(Driver.DriverAvailability.BOOKED);
                    driverRepository.save(driver);
                } else {
                    throw new ServiceException("Driver tidak ditemukan");
                }
            }

            // change car availability
            Vehicle vehicle2 = vehicleRepository.findById(transactionDTO.getIdVehicle()).orElse(null);
            if (vehicle2 != null) {
                vehicle2.setVehicleAvailability(Vehicle.VehicleAvailability.BOOKED);
                vehicleRepository.save(vehicle2);
            } else {
                throw new ServiceException("Mobil tidak ditemukan");
            }

            //save transaction or create order
            transactionRepository.save(transactionOrder);
        }

            TransactionDTORes response = new TransactionDTORes();
            response.setPaymentMethodName(paymentMethod.getPaymentMethodName());
            response.setNoRek(paymentMethod.getNoRek());
            response.setVehicleName(vehicle.getVehicleName());
            response.setPricePerHour(vehicle.getPricePerHour());
            response.setDriverName(driver.getDriverName());
            response.setCustomerName(customer.getCustomerName());
            response.setEmail(customer.getEmail());
            response.setPhoneNumber(customer.getPhoneNumber());
            response.setStartHour(transactionOrder.getStartHour());
            response.setFinishHour(transactionOrder.getFinishHour());
            response.setTotalPrice(transactionOrder.getTotalPrice());

            return response;
    }


    public List<OrderDetailsMap> findAllOnGoingTransaction() {
        return transactionDao.getAllOngoingTransaction();
    }

    public List<OrderDetailsMap> findAllTransactionHistory() {
        return transactionDao.getAllTransaction();
    }

    public List<OrderDetailsMap> finishTransaction(Long id) {
        TransactionOrder transactionOrder = transactionRepository.findById(id).orElse(null);
        if (transactionOrder != null) {
             transactionOrder.setTransactionStatus(TransactionOrder.TransactionStatus.FINISH);
             //disini jika penghitungan ulang total price
            transactionRepository.save(transactionOrder);
            if(transactionOrder.getIdDriver()!=0){
                Driver driver = driverRepository.findById(transactionOrder.getIdDriver()).orElse(null);
                assert driver != null;
                driver.setDriverAvailability(Driver.DriverAvailability.AVAILABLE);
                driverRepository.save(driver);
            }
           Vehicle vehicle = vehicleRepository.findById(transactionOrder.getIdVehicle()).orElse(null);
            assert vehicle != null;
            vehicle.setVehicleAvailability(Vehicle.VehicleAvailability.AVAILABLE);
            vehicleRepository.save(vehicle);
            return  transactionDao.getAllTransaction();
        }
            return null;
    }


}