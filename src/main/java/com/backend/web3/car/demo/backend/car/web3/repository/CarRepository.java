package com.backend.web3.car.demo.backend.car.web3.repository;

import com.backend.web3.car.demo.backend.car.web3.model.Car;

import java.util.List;

public interface CarRepository {
    List<Car> getAllCar();
    void addCar(String message, Car car);

}
