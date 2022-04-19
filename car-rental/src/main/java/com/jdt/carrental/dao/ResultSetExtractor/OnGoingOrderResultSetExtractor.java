package com.jdt.carrental.dao.ResultSetExtractor;

import com.jdt.carrental.dto.map.OrderDetailsMap;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class OnGoingOrderResultSetExtractor implements ResultSetExtractor<List<OrderDetailsMap>> {

    List<OrderDetailsMap> orderDetailsMaps = new ArrayList<>();

    @Override
    public List<OrderDetailsMap> extractData(ResultSet rs) throws SQLException, DataAccessException {
        while (rs.next()) {
            OrderDetailsMap orderDetailsMap = new OrderDetailsMap();

            orderDetailsMap.setPaymentMethodName(rs.getString("payment_method"));
            orderDetailsMap.setNoRek(rs.getString("no_rek"));
            orderDetailsMap.setIdVehicle(rs.getLong("id_vehicle"));
            orderDetailsMap.setVehicleName(rs.getString("vehicle_name"));
            orderDetailsMap.setPricePerHour(rs.getBigDecimal("price_per_hour"));
            orderDetailsMap.setIdDriver(rs.getLong("id_driver"));
            orderDetailsMap.setDriverName(rs.getString("driver_name"));
            orderDetailsMap.setCustomerName(rs.getString("customer_name"));
            orderDetailsMap.setEmail(rs.getString("email"));
            orderDetailsMap.setPhoneNumber(rs.getString("phone_number"));
            orderDetailsMap.setIdTransaction(rs.getLong("id_transaction"));
            orderDetailsMap.setStartHour(rs.getDate("start_hour"));
            orderDetailsMap.setFinishHour(rs.getDate("finish_hour"));
            orderDetailsMap.setTotalPrice(rs.getBigDecimal("total_price"));

            orderDetailsMaps.add(orderDetailsMap);

        }
        return orderDetailsMaps;
    }
}
