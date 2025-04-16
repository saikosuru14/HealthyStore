package com.ivy.HealthyStore.Controller;

import com.ivy.HealthyStore.Model.Oils;
import com.ivy.HealthyStore.Service.OilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/oils")
public class OilsController {

    @Autowired
    private OilsService oilsService;

    //To
    @CrossOrigin
    @GetMapping("/Oils_list")
    public List display(){
        return oilsService.displayOilDetails();
    }

    @CrossOrigin
    @PostMapping("/insert")
    public void addValue(@RequestBody Oils oils){
        oilsService.add(oils);
    }

}
