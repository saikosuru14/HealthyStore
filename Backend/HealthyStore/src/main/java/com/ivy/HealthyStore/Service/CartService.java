package com.ivy.HealthyStore.Service;

import com.ivy.HealthyStore.CartRepo;
import com.ivy.HealthyStore.Model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    //To get products data  from the database
    public List<Cart> displayCartDetails(){
        return cartRepo.findAll();
    }

    //To insert Product data to Cart table in the database
    public void add(Cart cartItems) {
        cartRepo.save(cartItems);

    }

    //To delete the products data by ID from in cart table in the database
    public void delete(int id) {
        cartRepo.deleteById(id);
    }

    //To delete all the products data from cart table in the database
    public void deleteItems() {
        cartRepo.deleteAll();
    }
}
