package com.ivy.HealthyStore.Controller;

import com.ivy.HealthyStore.Model.Users;
import com.ivy.HealthyStore.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;


    //To insert user Registration data in the users table of database
    @CrossOrigin
    @PostMapping("/insert")
    public void addUser(@RequestBody Users users){
        usersService.addValue(users);
    }


    //To verify whether input user data present in database or not
    @CrossOrigin
    @PostMapping("/verify")
    public String verifyUser(@RequestBody Users users){
        String result= usersService.verify(users);
        if (result != null && result != "user not found !!"){
            return result;
        } else if (result==null) {
            return "Enter correct details";
        }
        else{
            return "User not registered !!";
        }
    }

}
