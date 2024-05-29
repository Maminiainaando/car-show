package com.backend.web3.car.demo.backend.car.web3.model;

public class Car {
    private String carName;
    private String model;
    private float price;
    private String color;
    private String motorType;
    private String power;
    private int placeNumber;
    private String status;
    private String typeCar;

    public Car(String carName, String model, float price, String color, String motorType, String power, int placeNumber, String status, String typeCar) {
        this.carName = carName;
        this.model = model;
        this.price = price;
        this.color = color;
        this.motorType = motorType;
        this.power = power;
        this.placeNumber = placeNumber;
        this.status = status;
        this.typeCar = typeCar;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMotorType() {
        return motorType;
    }

    public void setMotorType(String motorType) {
        this.motorType = motorType;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public int getPlaceNumber() {
        return placeNumber;
    }

    public void setPlaceNumber(int placeNumber) {
        this.placeNumber = placeNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTypeCar() {
        return typeCar;
    }

    public void setTypeCar(String typeCar) {
        this.typeCar = typeCar;
    }
}
