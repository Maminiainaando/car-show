package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;

import com.backend.web3.car.demo.backend.car.web3.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AppointmentController {
    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping("/allAppointment")
    public List<Appointment> getAllAppointment() {
        return appointmentService.getAllAppointment();
    }

    @PostMapping("/addAppointment")
    public ResponseEntity<Void> addAppointment(@RequestBody Appointment appointment) {
        appointmentService.addAppointment("add appointment done", appointment);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
