package com.clover.fortoon.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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

    @GetMapping(value = "/genre")
    private List<String> genreList(){
        System.out.println("genre값 불러오기");
        return webToonMapper.genreList();
    }
    
    @GetMapping("/resultToon")
    private List<String> bigThumbUrlList(){
        System.out.println("썸네일url 불러오기");
        return webToonMapper.bigThumbUrlList();
    }

    @GetMapping("/drawingStyle")
    private List<String> thumbnailList(){
        System.out.println("그림체url 불러오기");
        return webToonMapper.thumbnailList();
    }

    @GetMapping("/tag")
    private List<String> tagList(){
        System.out.println("tag 불러오기");

        List<String> allTag = webToonMapper.tagList();
        List<String> rcmTag = new ArrayList<String>();
        for(int i = 0 ; i<10; i++){
            String[] splitTag = allTag.get(i).split(", ");
            for(int j=0; j<splitTag.length; j++){
                rcmTag.add(splitTag[j]);
            };
        };

        rcmTag = rcmTag.stream().distinct().collect(Collectors.toList());
        return rcmTag;
    }
}