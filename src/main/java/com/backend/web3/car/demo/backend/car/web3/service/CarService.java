package com.backend.web3.car.demo.backend.car.web3.service;

import com.backend.web3.car.demo.backend.car.web3.dao.DbConnection;
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
             ResultSet resultSet = statement.executeQuery(" SELECT \n" +
                     "    c.id_car, \n" +
                     "    c.car_name, \n" +
                     "    c.model, \n" +
                     "    c.price, \n" +
                     "    c.color, \n" +
                     "    c.motor_type, \n" +
                     "    c.power, \n" +
                     "    c.place_number, \n" +
                     "    c.status, \n" +
                     "    c.type_car, \n" +
                     "    i.url \n" +
                     "FROM \n" +
                     "    car c \n" +
                     "INNER JOIN \n" +
                     "    image i \n" +
                     "ON \n" +
                     "    i.id_car = c.id_car;\n ")){
            while (resultSet.next()){
                cars.add(new Car(resultSet.getInt("id_car"),resultSet.getString("car_name"), resultSet.getString("model"), resultSet.getFloat("price"), resultSet.getString("color"),resultSet.getString("motor_type"), resultSet.getString("power"),resultSet.getInt("place_number"),resultSet.getString("status"),resultSet.getString("type_car"),resultSet.getString("url")));
            }


        } catch (Exception e) {

            throw new RuntimeException("fix it : ", e);
        }

        return cars;
    }

    @Override
    public void addCar(String message, Car car) {
        Statement statement;
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        try {
            String query = String.format("insert into car(car_name,model,price,color,motor_type,power,place_number,status,type_car) values ('%s', '%s', '%s','%s', '%s', '%s','%s', '%s', '%s');",car.getCarName(),car.getModel(),car.getPrice(),car.getColor(),car.getMotorType(),car.getPower(),car.getPlaceNumber(),"Pinned",car.getTypeCar());
            statement = conn.createStatement();
            statement.executeUpdate(query);

            System.out.println("New Car  save ✔");

        } catch (Exception e) {
            throw new RuntimeException(" fix it ",e);
        }
    }
}
