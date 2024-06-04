package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;
import com.backend.web3.car.demo.backend.car.web3.service.AppointmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppointmentController {
    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/addAppointment")
    public ResponseEntity<Void> addAppointment(@RequestBody Appointment appointment) {
        appointmentService.addAppointment("add appointment done", appointment);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
