package com.clover.fortoon.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.Base64.Encoder;
import java.util.stream.Collectors;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.clover.fortoon.mapper.WebToonMapper;
import com.clover.fortoon.model.DrawingStyleDTO;
import com.clover.fortoon.model.SynopsisDTO;
import com.clover.fortoon.model.WebToonDTO;
import com.clover.fortoon.model.FeatureValueDTO;

@CrossOrigin(origins = "*")
@RestController
public class WebToonController {

    @Autowired
    WebToonMapper webToonMapper;
    
    @GetMapping(value = "/imagePath/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    private ResponseEntity<byte[]> testImagePrint(@PathVariable("imageName") String imageName) throws IOException {
        String imagePath = "C:/FeatureImages/"+imageName;
        InputStream imageStream = new FileInputStream(imagePath);
        byte[] imageByteArray = IOUtils.toByteArray(imageStream);
        imageStream.close();
        Encoder encoder = Base64.getEncoder();
        return new ResponseEntity<byte[]>(encoder.encode(imageByteArray), HttpStatus.OK);
    }

    @GetMapping(value = "/modalImagePath/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    private ResponseEntity<byte[]> modalImagePrint(@PathVariable("imageName") String imageName) throws IOException {
        String imagePath = "C:/FeatureImages/ImageCategory/"+imageName;
        InputStream imageStream = new FileInputStream(imagePath);
        byte[] imageByteArray = IOUtils.toByteArray(imageStream);
        imageStream.close();
        Encoder encoder = Base64.getEncoder();
        return new ResponseEntity<byte[]>(encoder.encode(imageByteArray), HttpStatus.OK);
    }

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
    private List<DrawingStyleDTO> drawingStyleList(){
        System.out.println("그림체url 및 웹툰번호 불러오기");

        List<DrawingStyleDTO> result = new ArrayList<DrawingStyleDTO>();
        String DATA_DIRECTORY = "C:/FeatureImages/ImageCategory/";
        File dir = new File(DATA_DIRECTORY);

        String[] filenames = dir.list();
        for (int i = 0; i < filenames.length; i++) {
            filenames[i] = filenames[i].replace("_", "%");
            filenames[i] = filenames[i].replace(".png", "");
            DrawingStyleDTO dto = new DrawingStyleDTO();
            dto = webToonMapper.getdrawingStyleInfo(filenames[i]);
            filenames[i] = filenames[i].replace("%", "_");
            filenames[i] += ".png";
            dto.setFilename(filenames[i]);
            result.add(dto);
        }

        return result;
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

    @GetMapping("/synopsis")
    private List<List<SynopsisDTO>> synopsisList(){
        System.out.println("synopsis 페이지에 필요한 값 불러오기");

        List<List<SynopsisDTO>> resultList = new ArrayList<List<SynopsisDTO>>();
        List<SynopsisDTO> dto = webToonMapper.synopsisList();

        String dayArr[] = {"월","화","수","목","금","토","일"};

        for (String day : dayArr) {
            List<SynopsisDTO> tmpList = new ArrayList<SynopsisDTO>();
            for (SynopsisDTO synopsisDTO : dto) {
                if (synopsisDTO.getWebtoon_day().contains(day)) {
                    tmpList.add(synopsisDTO);
                }
            }
            resultList.add(tmpList);
        }

        return resultList;
    }
    
    @PostMapping("/calcResult")
    private List<List<WebToonDTO>> getCalcResult(@RequestBody List<Map<String, List<String>>> params){
        List<String> genre = params.get(0).get("genre");
        List<String> drawingStyle = params.get(1).get("drawingStyle");
        List<String> synopsis = params.get(2).get("synopsis");
        // 여기서 추천 알고리즘 계산 해야함

        // 0. webtoon 전체 데이터를 불러보자 이거 속도 체크하고 아니다 싶으면 쿼리 여러번 해서 받는걸로 수정?
        List<WebToonDTO> toons = webToonMapper.webtoonList();
        List<WebToonDTO> filteredToon = new ArrayList<>();
        // 1. 고른 장르로 필터링 해놓고 길이 구해보자
        for (WebToonDTO tmp : toons){
            for (String tmpgenre : genre) {
                if(tmp.getWebtoon_genre().contains(tmpgenre)){
                    filteredToon.add(tmp);
                }
            }
        }
        //  그렇게해서 장르로 한번 필터링한 웹툰 DTO 전체가 filtererd임.
        System.out.println(filteredToon.size());

        // 2. 이제 그림체로 필터린된 얘들을 가져와 보자
        List<FeatureValueDTO> filteredDrawing = new ArrayList<>();
        List<FeatureValueDTO> drawingFeatures =  webToonMapper.featureValueList();
        
        for(String tmp : drawingStyle){
            for(FeatureValueDTO tmp2 : drawingFeatures){

            }
        }
        for(FeatureValueDTO tmp : drawingFeatures){
            for(String tmp2 : drawingStyle){
                if(tmp.getWebtoon_num() == Integer.parseInt(tmp2) ){
                    tmp.getChr_num();
                    filteredDrawing.add(tmp);
                }
            }
        }

        System.out.println(filteredDrawing.size());

        // 3. 고른 시놉시스 유사도를 계산하고

        List<List<WebToonDTO>> test = new ArrayList<List<WebToonDTO>>();
        return test;
    }
}