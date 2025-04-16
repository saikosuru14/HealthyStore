package com.ivy.HealthyStore.Model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Table(name="users")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    private String username;
    private String email;
    private String password;

}
