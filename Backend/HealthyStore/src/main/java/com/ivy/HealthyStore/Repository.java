package com.ivy.HealthyStore;

import com.ivy.HealthyStore.Model.Oils;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Oils,Integer> {
//    Optional<Oils> findByName(String name);
}
