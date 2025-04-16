package com.ivy.HealthyStore.Service;

import com.ivy.HealthyStore.Model.Users;
import com.ivy.HealthyStore.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;
@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    //To add User details to user table
    @CrossOrigin
    public void addValue(@RequestBody Users users) {
        usersRepository.save(users);
    }

    //Method for Comparing input login data with database
    public String verify(Users login_user) {
        Optional<Users> users = usersRepository.findByUsername(login_user.getUsername());
        if (users.isPresent()) {
            String login_username=users.get().getUsername();
            String pass=users.get().getPassword();
            if(pass.compareTo(login_user.getPassword())==0){
                return login_username;
            }
            else{
                return null;
            }
        }
        else {
            return "user not found !!";
        }
    }

}
