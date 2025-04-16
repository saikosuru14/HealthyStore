package com.ivy.HealthyStore;

import com.ivy.HealthyStore.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users,String> {

    Optional<Users> findByUsername(String username);

}
