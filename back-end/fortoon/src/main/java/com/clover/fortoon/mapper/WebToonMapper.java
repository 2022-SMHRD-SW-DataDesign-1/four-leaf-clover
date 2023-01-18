package com.clover.fortoon.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.clover.fortoon.model.WebToonDTO;

@Mapper
public interface WebToonMapper {
    WebToonDTO testwt();
}
