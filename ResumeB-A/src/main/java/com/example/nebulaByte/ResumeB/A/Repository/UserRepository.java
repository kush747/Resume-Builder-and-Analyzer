package com.example.nebulaByte.ResumeB.A.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.nebulaByte.ResumeB.A.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    // Optional<User> findByUsername(String username);

    Optional<User> findById(Long id);

    boolean existsByName(String name);

}
