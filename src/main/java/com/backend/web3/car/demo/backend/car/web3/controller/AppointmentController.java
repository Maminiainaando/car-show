package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.AppointDTO;
import com.backend.web3.car.demo.backend.car.web3.model.Appointment;

import com.backend.web3.car.demo.backend.car.web3.model.Car;
import com.backend.web3.car.demo.backend.car.web3.model.CarDTO;
import com.backend.web3.car.demo.backend.car.web3.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class AppointmentController {
    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping("/allAppointment")
    public ResponseEntity<List<AppointDTO>> getAllAppointment() {
        List<Appointment> appointments = appointmentService.getAllAppointment();
        List<AppointDTO> appointDTOS = appointments.stream()
                .map(appointment -> new AppointDTO(
                        appointment.getName(),
                        appointment.getFirstName(),
                        appointment.getEmail(),
                        appointment.getContact(),
                        appointment.getMessage(),
                        appointment.getAppointmentDate(),
                        appointment.getStatus(),
                        appointment.getIdCar()
                ))
                .collect(Collectors.toList());

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(appointDTOS.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");

        return ResponseEntity.ok().headers(headers).body(appointDTOS);
    }

    @GetMapping("/allAppointment/{id}")
    public ResponseEntity<Map<String, Object>> getAppointmentById(@PathVariable int id) {
        List<Appointment> appointments = appointmentService.getAppointmentById(id);
        if (appointments.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        AppointDTO appointDTO = appointments.stream()
                .map(appointment -> new AppointDTO(
                        appointment.getName(),
                        appointment.getFirstName(),
                        appointment.getEmail(),
                        appointment.getMessage(),
                        appointment.getContact(),
                        appointment.getAppointmentDate(),
                        appointment.getStatus(),
                        appointment.getIdCar()
                ))
                .findFirst().orElse(null);

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");

        return ResponseEntity.ok().headers(headers).body(Map.of("data", appointDTO));
    }


    @PostMapping("/addAppointment")
    public ResponseEntity<Void> addAppointment(@RequestBody Appointment appointment) {
        appointmentService.addAppointment("add appointment done", appointment);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/changeStatusAppointment")
    public  ResponseEntity<Void> changeStatusAppointment(@RequestBody Appointment appointment){
        appointmentService.changeStatusAppointment("change status ok",appointment);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
