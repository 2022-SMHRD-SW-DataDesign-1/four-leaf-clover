package com.clover.fortoon.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.clover.fortoon.model.DrawingStyleDTO;
import com.clover.fortoon.model.SynopsisDTO;
import com.clover.fortoon.model.WebToonDTO;
import com.clover.fortoon.model.FeatureValueDTO;

@Mapper
public interface WebToonMapper {
    List<String> genreList();
    List<String> bigThumbUrlList();
    List<String> tagList();
    List<DrawingStyleDTO> drawingStyleList();
    DrawingStyleDTO getdrawingStyleInfo(String filename);
    List<SynopsisDTO> synopsisList();
    List<WebToonDTO> webtoonList();
    List<FeatureValueDTO> featureValueList();
}
