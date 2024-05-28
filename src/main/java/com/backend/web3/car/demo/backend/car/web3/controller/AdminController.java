package com.backend.web3.car.demo.backend.car.web3.controller;

import com.backend.web3.car.demo.backend.car.web3.model.Admin;
import com.backend.web3.car.demo.backend.car.web3.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {
private final AdminService adminService;
    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/account/admin")
    public List<Admin> getAllAdmin() {
        return adminService.getAllAdmin();
    }

    @PostMapping("/account/add")
    public ResponseEntity<Void> addAccount(@RequestBody Admin admin) {
        adminService.addAccount("add account done",admin);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
