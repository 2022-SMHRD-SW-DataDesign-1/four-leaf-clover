package com.clover.fortoon.controller;

import java.util.List;

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
    private List<String> genreList(){
        System.out.println("genre값 불러오기");
        return webToonMapper.genreList();
    }
    
    @GetMapping("/resultToon")
    private List<String> thumbUrlList(){
        System.out.println("썸네일url 불러오기");
        return webToonMapper.thumbUrlList();
    }
}