package com.jdt.carrental.repositories;

import com.jdt.carrental.models.TransactionOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionOrder, Long> {

//    @Query(value = "select t.idCustomer.customerName, " +
//            "t.idDriver.driverName, " +
//            "t.idVehicle.vehicleName," +
//            " t.startHour, t.finishHour," +
//            " t.orderStatus" +
//            " from TransactionOrder t " +
//            "full join " +
//            "where t.orderStatus = com.jdt.carrental.models.TransactionOrder.TransactionStatus.FINISH",
//            nativeQuery = true)
//    List<TransactionOrder> transaction(@Param("idTransaction") Long id);
}
