package com.backend.web3.car.demo.backend.car.web3.repository;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;
import com.backend.web3.car.demo.backend.car.web3.model.Car;

import java.util.List;

public interface AppointmentRepository {
    List<Appointment> getAllAppointment();
    void addAppointment(String message, Appointment appointment);
    List<Appointment>getAppointmentById(int idAppointement);
    void changeStatusAppointment(String message , Appointment appointment);
}
