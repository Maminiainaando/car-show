package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.Car;
import com.backend.web3.car.demo.backend.car.web3.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {
    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/allCar")
    public List<Car> getAllCar() {
        return carService.getAllCar();
    }
    @GetMapping("/allCarByType/{typeCare}")
    public List<Car> getCarByType(@PathVariable String typeCare){
        return carService.getCarByType(typeCare);
    }
    @GetMapping("/allCarByTypeMotor/{typeMotor}")
    public List<Car> getCarByMotorType(@PathVariable String typeMotor){
        return carService.getCarByMotorType(typeMotor);
    }
    @GetMapping("/allCarByMinPrice")
    public List<Car> getCarByMinPrice(){
        return carService.getCarByMinPrice();
    }
    @GetMapping("/allCarByMaxPrice")
    public List<Car> getCarByMaxPrice(){
        return carService.getCarByMaxPrice();
    }

    @PostMapping("/carAdd")
    public ResponseEntity<Void> addCar(@RequestBody Car car) {
        carService.addCar("add car done", car);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
