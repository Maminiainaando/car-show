package com.backend.web3.car.demo.backend.car.web3.repository;

import com.backend.web3.car.demo.backend.car.web3.model.Admin;

import java.util.List;

public interface AdminRepository {
    List<Admin> getAllAdmin();
    void addAccount(String message, Admin admin);

}
