package com.ivy.HealthyStore;

import com.ivy.HealthyStore.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<Cart,Integer> {
}
