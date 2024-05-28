package com.backend.web3.car.demo.backend.car.web3.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class DbConnection {
    private String url;
    private String password;
    private String user;

    DatabaseConfig databaseConfig = new DatabaseConfig();

    public DbConnection() {
        this.url = System.getenv("url");


        this.password = System.getenv("password");


        this.user = System.getenv("user");

    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    public String getUrl() {
        return url;
    }

    public Connection conn_db(String dbname) {


        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url + dbname, user, password);

            if (conn != null) {
                System.out.println("connection donne ! ");
            } else {
                System.out.println("error path");
            }

        } catch (Exception e) {
            throw  new RuntimeException("fix it : ",e);
        }
        return conn;
    }
}
