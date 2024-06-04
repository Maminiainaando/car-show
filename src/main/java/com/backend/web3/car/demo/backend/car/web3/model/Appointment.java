package com.backend.web3.car.demo.backend.car.web3.model;

public class Appointment {
    private String name;
    private String firstName;
    private String email;
    private String message;
    private String contact;
    private String appointmentDate;
    private String status;
    private int idCar;

    public Appointment(String name, String firstName, String email, String message, String contact, String appointmentDate, String status, int idCar) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.message = message;
        this.contact = contact;
        this.appointmentDate = appointmentDate;
        this.status = status;
        this.idCar = idCar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getIdCar() {
        return idCar;
    }

    public void setIdCar(int idCar) {
        this.idCar = idCar;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "name='" + name + '\'' +
                ", firstName='" + firstName + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                ", contact='" + contact + '\'' +
                ", appointmentDate='" + appointmentDate + '\'' +
                ", status='" + status + '\'' +
                ", idCar=" + idCar +
                '}';
    }
}
