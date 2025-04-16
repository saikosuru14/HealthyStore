package com.ivy.HealthyStore.Controller;

import com.ivy.HealthyStore.Model.Cart;
import com.ivy.HealthyStore.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    //To display products data in frontend
    @CrossOrigin
    @GetMapping("/cart_list")
    public List display(){
        return cartService.displayCartDetails();
    }

    //To insert Product data to Cart table in the database
    @CrossOrigin
    @PostMapping("/insert")
    public void addValue(@RequestBody Cart cartItems){
        cartService.add(cartItems);
    }

    //To delete the products data by ID from database
    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public void deleteValue(@PathVariable("id") int id){
        cartService.delete(id);
    }

    //To delete all the products data from database
    @CrossOrigin
    @DeleteMapping("/deleteAll")
    public void purchaseAll(){
        cartService.deleteItems();
    }

}
