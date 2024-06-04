package com.backend.web3.car.demo.backend.car.web3.repository;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;

import java.util.List;

public interface AppointmentRepository {
    List<Appointment> getAllAppointment();
    void addAppointment(String message, Appointment appointment);
}
