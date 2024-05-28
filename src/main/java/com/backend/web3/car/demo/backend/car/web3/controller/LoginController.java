package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.LoginForm;
import com.backend.web3.car.demo.backend.car.web3.repository.AuthenticateAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
@RestController
public class LoginController {
    private final AuthenticateAdmin authenticateAdmin;
    private final DataSource dataSource;


    public LoginController(AuthenticateAdmin authenticateAdmin, DataSource dataSource) {
        this.authenticateAdmin = authenticateAdmin;
        this.dataSource = dataSource;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginForm loginForm) {
        String email = loginForm.getEmail();
        String password = loginForm.getPassword();

        try (Connection connection = dataSource.getConnection()) {
            if (authenticateAdmin.AuthenticateAdmin(email,password, connection)) {
                System.out.println("information correct");
                return ResponseEntity.ok("Information correct");
            } else {
                System.out.println(" bad Information ");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(" bad Information ");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error base", e);

        }
    }
}
