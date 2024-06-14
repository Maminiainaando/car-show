package com.backend.web3.car.demo.backend.car.web3.model;

public class AppointDTO {

    private String name;
    private String firstName;
    private String email;
    private String message;
    private String contact;
    private String appointmentDate;
    private String status;
    private int id;

    public AppointDTO(String name, String firstName, String email, String message, String contact, String appointmentDate, String status, int id) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.message = message;
        this.contact = contact;
        this.appointmentDate = appointmentDate;
        this.status = status;
        this.id = id;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
