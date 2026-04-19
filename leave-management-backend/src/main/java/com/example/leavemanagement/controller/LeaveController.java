package com.example.leavemanagement.controller;

import com.example.leavemanagement.entity.Leave;
import com.example.leavemanagement.repository.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin("*")
public class LeaveController {

    @Autowired
    private LeaveRepository leaveRepository;

    //get the leaves
    @GetMapping
    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

    //add a new leave request
    @PostMapping
    public Leave applyLeave(@RequestBody Leave leave) {
        leave.setStatus("Pending");
        return leaveRepository.save(leave);
    }

    //update a leave status
    @PutMapping("/{id}")
    public Leave updateLeaveStatus(@PathVariable Long id, @RequestBody Leave statusUpdate) {
        Leave leave = leaveRepository.findById(id).orElseThrow(() -> new RuntimeException("Leave record not found"));
        leave.setStatus(statusUpdate.getStatus());
        return leaveRepository.save(leave);
    }
}
