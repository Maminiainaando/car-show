package com.backend.web3.car.demo.backend.car.web3.service;

import com.backend.web3.car.demo.backend.car.web3.model.Car;
import com.backend.web3.car.demo.backend.car.web3.repository.CarRepository;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Service
public class CarService implements CarRepository {

    private final DataSource dataSource;

    public CarService(DataSource dataSource) {
        this.dataSource = dataSource;
    }


    @Override
    public List<Car> getAllCar() {
        List<Car> cars = new ArrayList<>();
        try (Connection connection = dataSource.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(" select * from car ")){
            while (resultSet.next()){
                cars.add(new Car(resultSet.getInt("id_car"),resultSet.getString("car_name"), resultSet.getString("model"), resultSet.getFloat("price"), resultSet.getString("color"),resultSet.getString("motor_type"), resultSet.getString("power"),resultSet.getInt("place_number"),resultSet.getString("status"),resultSet.getString("type_car")));
            }


        } catch (Exception e) {

            throw new RuntimeException("fix it : ", e);
        }

        return cars;
    }
}
