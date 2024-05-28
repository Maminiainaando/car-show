package com.backend.web3.car.demo.backend.car.web3;

import com.backend.web3.car.demo.backend.car.web3.dao.DatabaseConfig;
import com.backend.web3.car.demo.backend.car.web3.dao.DbConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);


		DbConnection db = new DbConnection();
		Connection conn = db.conn_db("car_show");



	}

}
