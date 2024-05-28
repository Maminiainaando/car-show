package com.backend.web3.car.demo.backend.car.web3.service;

import com.backend.web3.car.demo.backend.car.web3.dao.DbConnection;
import com.backend.web3.car.demo.backend.car.web3.model.Admin;
import com.backend.web3.car.demo.backend.car.web3.repository.AdminRepository;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Service

public class AdminService implements AdminRepository {

    private final DataSource dataSource;

    public AdminService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public List<Admin> getAllAdmin() {
        List<Admin>admins=new ArrayList<>();
        try (Connection connection = dataSource.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("select * from admin ")) {
            while (resultSet.next()) {
                admins.add(new Admin(resultSet.getString("name"), resultSet.getString("email"), resultSet.getString("password")));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return admins;
    }

    @Override
    public void addAccount(String message, Admin admin) {
        Statement statement;
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        try {
            String query = String.format("insert into admin(name,email,password) values ('%s', '%s', '%s');",admin.getName(),admin.getEmail(),admin.getPassword());
            statement = conn.createStatement();
            statement.executeUpdate(query);

            System.out.println("Account save ✔");

        } catch (Exception e) {
            throw new RuntimeException(" fix it ",e);
        }
    }
}
