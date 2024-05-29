package com.backend.web3.car.demo.backend.car.web3.model;

public class Image {
    private String url;
    private  int idCar;

    public Image(String url, int idCar) {
        this.url = url;
        this.idCar = idCar;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getIdCar() {
        return idCar;
    }

    public void setIdCar(int idCar) {
        this.idCar = idCar;
    }
}
