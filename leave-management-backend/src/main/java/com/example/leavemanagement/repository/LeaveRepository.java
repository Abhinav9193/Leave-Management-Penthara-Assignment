package com.example.leavemanagement.repository;

import com.example.leavemanagement.entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// LeaveRepository to manage db operations by extending the JpaRepo
@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long> {
}
