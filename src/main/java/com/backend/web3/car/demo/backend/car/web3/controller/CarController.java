package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.Car;
import com.backend.web3.car.demo.backend.car.web3.model.CarDTO;
import com.backend.web3.car.demo.backend.car.web3.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CarController {
    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/allCar")
    public ResponseEntity<List<CarDTO>> getAllCar() {
        List<Car> cars = carService.getAllCar();

        List<CarDTO> carDTOs = cars.stream()
                .map(car -> new CarDTO(
                        car.getIdCar(),
                        car.getCarName(),
                        car.getModel(),
                        car.getPrice(),
                        car.getColor(),
                        car.getMotorType(),
                        car.getPower(),
                        car.getPlaceNumber(),
                        car.getStatus(),
                        car.getTypeCar(),
                        car.getUrl()
                ))
                .collect(Collectors.toList());

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(carDTOs.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");

        return ResponseEntity.ok().headers(headers).body(carDTOs);
    }


    @CrossOrigin(origins = "http://localhost:3000")
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
    @PostMapping("/changeStatusCar")
    public  ResponseEntity<Void> changeStatusCar(@RequestBody Car car){
        carService.changeStatusCar("change status ok",car);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
