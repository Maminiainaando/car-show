package com.backend.web3.car.demo.backend.car.web3.repository;

import java.sql.Connection;

public interface AuthenticateAdmin {
    boolean AuthenticateAdmin(String email, String password, Connection connection);
}
