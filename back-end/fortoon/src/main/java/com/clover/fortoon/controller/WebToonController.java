package com.clover.fortoon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.clover.fortoon.mapper.WebToonMapper;
import com.clover.fortoon.model.WebToonDTO;

@CrossOrigin(origins = "*")
@RestController
public class WebToonController {

    @Autowired
    WebToonMapper webToonMapper;

    @GetMapping(value = "/")
    private WebToonDTO pollPage(){
        System.out.println("test값 불러오기");
        WebToonDTO dto = webToonMapper.testwt();
        //System.out.println(dto.getTitle());
        return dto;
    }
    
}
