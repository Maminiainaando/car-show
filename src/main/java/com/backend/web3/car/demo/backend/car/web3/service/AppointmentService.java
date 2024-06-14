package com.backend.web3.car.demo.backend.car.web3.service;

import com.backend.web3.car.demo.backend.car.web3.dao.DbConnection;
import com.backend.web3.car.demo.backend.car.web3.function.FunctionUse;
import com.backend.web3.car.demo.backend.car.web3.model.Appointment;
import com.backend.web3.car.demo.backend.car.web3.model.Car;
import com.backend.web3.car.demo.backend.car.web3.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.util.List;

@Service
public class AppointmentService implements AppointmentRepository {

    @Override
    public List<Appointment> getAllAppointment() {
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        FunctionUse fun = new FunctionUse();
        return fun.getAllAppointment(conn);
    }

    @Override
    public void addAppointment(String message, Appointment appointment) {
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        FunctionUse fun = new FunctionUse();
        fun.addAppointment(conn, appointment);

    }

    @Override
    public List<Appointment> getAppointmentById(int idAppointement) {
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        FunctionUse fun = new FunctionUse();
        return fun.getAppointmentById(conn,idAppointement);
    }

    @Override
    public void changeStatusAppointment(String message, Appointment appointment) {
        DbConnection dbConnection = new DbConnection();
        Connection conn = dbConnection.conn_db("car_show");
        FunctionUse fun = new FunctionUse();
        fun.changeStatusAppointment(conn,appointment.getStatus(),appointment.getIdCar());
    }
}
