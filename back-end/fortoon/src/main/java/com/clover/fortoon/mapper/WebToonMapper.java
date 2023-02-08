package com.clover.fortoon.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.clover.fortoon.model.WebToonDTO;

@Mapper
public interface WebToonMapper {
    List<String> genreList();
    List<String> bigThumbUrlList();
}
