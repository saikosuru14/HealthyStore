package com.ivy.HealthyStore.Model;

import lombok.*;

import javax.persistence.*;
@Entity
@Table(name="oils")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Oils {
    @Id
    private int id;
    private String image;
    private String name;
    private int price;


}
