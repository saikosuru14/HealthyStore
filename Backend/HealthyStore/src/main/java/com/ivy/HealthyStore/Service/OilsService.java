package com.ivy.HealthyStore.Service;

import com.ivy.HealthyStore.Model.Oils;
import com.ivy.HealthyStore.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OilsService {
    @Autowired
    private Repository repository;

    //To get all products data from oils table in the database
    public List<Oils> displayOilDetails(){
        return repository.findAll();
    }


    //To insert Oils data in oils table in the database
    public void add(Oils oils) {
        repository.save(oils);
    }
}
