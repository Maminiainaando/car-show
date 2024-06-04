package com.backend.web3.car.demo.backend.car.web3.service;

import com.backend.web3.car.demo.backend.car.web3.dao.DbConnection;
import com.backend.web3.car.demo.backend.car.web3.function.FunctionUse;
import com.backend.web3.car.demo.backend.car.web3.model.Appointment;
import com.backend.web3.car.demo.backend.car.web3.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.sql.Connection;

@Service
public class AppointmentService implements AppointmentRepository {

    @Override
    public void addAppointment(String message, Appointment appointment) {
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        FunctionUse fun = new FunctionUse();
        fun.addAppointment(conn, appointment);

    }
}
