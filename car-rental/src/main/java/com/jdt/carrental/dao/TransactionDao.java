package com.jdt.carrental.dao;

import com.jdt.carrental.dao.ResultSetExtractor.OnGoingOrderResultSetExtractor;
import com.jdt.carrental.dto.map.OrderDetailsMap;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@Service
public class TransactionDao {

//    public int select1FromDual(int n) {
//        return jdbc.query("select ? from dual", new Object[]{n}, new RowMapper<Integer>() {
//
//            @Override
//            public Integer mapRow(ResultSet rs, int rowNum) throws SQLException {
//                return rs.getInt(1);
//            }
//
//        }).get(0).intValue();
//    }

    @Autowired
    private JdbcTemplate jdbc;

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private final static String sql_getAllOngoingTransaction =
            "SELECT \n" +
                    "trx.id_transaction as id_transaction,\n" +
                    "trx.start_hour as start_hour,\n" +
                    "trx.finish_hour  as finish_hour,\n" +
                    "trx.total_price as total_price,\n" +
                    "p.payment_method_name as payment_method,\n" +
                    "p.no_rek as no_rek,\n" +
                    "v.id_vehicle as id_vehicle,\n" +
                    "v.vehicle_name as vehicle_name,\n" +
                    "v.price_per_hour as price_per_hour,\n" +
                    "d.id_driver as id_driver,\n" +
                    "d.driver_name as driver_name,\n" +
                    "c.customer_name as customer_name,\n" +
                    "c.email as email,\n" +
                    "c.phone_number as phone_number\n" +
                    "\n" +
                    "FROM transaction_order trx \n" +
                    "INNER JOIN customer c on trx.id_customer = c.id_customer\n" +
                    "INNER JOIN vehicle v on trx.id_vehicle = v.id_vehicle\n" +
                    "INNER JOIN driver d on trx.id_driver = d.id_driver\n" +
                    "INNER JOIN payment_method p on trx.id_payment_method = p.id_payment_method" +
                    "WHERE trx.order_status = 0 ";


    public List<OrderDetailsMap> getAllOngoingTransaction(){
        return jdbc.query(sql_getAllOngoingTransaction,new OnGoingOrderResultSetExtractor());
    }

    private final static String sql_getAllTransaction =
            "SELECT \n" +
                    "trx.id_transaction as id_transaction,\n" +
                    "trx.start_hour as start_hour,\n" +
                    "trx.finish_hour  as finish_hour,\n" +
                    "trx.total_price as total_price,\n" +
                    "p.payment_method_name as payment_method,\n" +
                    "p.no_rek as no_rek,\n" +
                    "v.id_vehicle as id_vehicle,\n" +
                    "v.vehicle_name as vehicle_name,\n" +
                    "v.price_per_hour as price_per_hour,\n" +
                    "d.id_driver as id_driver,\n" +
                    "d.driver_name as driver_name,\n" +
                    "c.customer_name as customer_name,\n" +
                    "c.email as email,\n" +
                    "c.phone_number as phone_number\n" +
                    "\n" +
                    "FROM transaction_order trx \n" +
                    "INNER JOIN customer c on trx.id_customer = c.id_customer\n" +
                    "INNER JOIN vehicle v on trx.id_vehicle = v.id_vehicle\n" +
                    "INNER JOIN driver d on trx.id_driver = d.id_driver\n" +
                    "INNER JOIN payment_method p on trx.id_payment_method = p.id_payment_method" +
                    "WHERE trx.order_status = 1 ";


    public List<OrderDetailsMap> getAllTransaction(){
        return jdbc.query(sql_getAllTransaction,new OnGoingOrderResultSetExtractor());
    }
}
