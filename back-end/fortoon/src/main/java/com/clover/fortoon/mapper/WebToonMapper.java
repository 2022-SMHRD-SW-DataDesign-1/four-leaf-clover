package com.clover.fortoon.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.clover.fortoon.model.DrawingStyleDTO;
import com.clover.fortoon.model.SynopsisDTO;
import com.clover.fortoon.model.WebToonDTO;
import com.clover.fortoon.model.FeatureValueDTO;
import com.clover.fortoon.model.ResultValueDTO;
import com.clover.fortoon.model.SituationChrDTO;
import com.clover.fortoon.model.SituationChrFormDTO;

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
    List<SituationChrFormDTO> getSttChrForm();
    SituationChrDTO getSttChr(int wt_num);
    ResultValueDTO getResultValue(int wt_num);
    String getMent(String sttchr);
}
