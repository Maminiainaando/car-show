package com.backend.web3.car.demo.backend.car.web3.function;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class FunctionUse {
    public int readIdCarForImage(Connection conn) {
        Statement statement;
        ResultSet rs = null;
        int id = 0;
        try {
            String query = String.format(" select id_car from car order by id_car desc limit 1; ");
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            while (rs.next()) {
                id = rs.getInt("id_car");
            }

        } catch (Exception e) {
            System.out.println(e);
            e.getMessage();
        }
        return id;
    }
}
