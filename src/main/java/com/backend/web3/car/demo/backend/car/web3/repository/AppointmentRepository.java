package com.backend.web3.car.demo.backend.car.web3.repository;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;

public interface AppointmentRepository {
    void addAppointment(String message, Appointment appointment);
}
