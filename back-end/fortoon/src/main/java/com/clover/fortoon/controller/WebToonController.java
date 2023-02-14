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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clover.fortoon.mapper.WebToonMapper;
import com.clover.fortoon.model.DrawingStyleDTO;
import com.clover.fortoon.model.SynopsisDTO;
import com.clover.fortoon.model.WebToonDTO;
import com.clover.fortoon.model.FeatureValueDTO;
import com.clover.fortoon.model.ResultValueDTO;
import com.clover.fortoon.model.SituationChrDTO;
import com.clover.fortoon.model.SituationChrFormDTO;

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

    @GetMapping(value = "/ImagePath/slides/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    private ResponseEntity<byte[]> slideImagePrint(@PathVariable("imageName") String imageName) throws IOException {
        String imagePath = "C:/FeatureImages/TagCardImage/"+imageName;
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

    @PostMapping("/tag")
    private List<String> tagList(@RequestBody List<String> tagList ){
        System.out.println("tag 불러오기");

        System.out.println(tagList);
        List<String> rcmTag = new ArrayList<String>();
        for(int i = 0 ; i < tagList.size(); i++){
            String[] splitTag = tagList.get(i).split(", ");
            for(int j=0; j < splitTag.length; j++){
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
    




    /*
    1) 장르 기준으로 필터링
    2) 필터링된 얘들 에서 추천리스트 구성 (아이템 특정 x)
    3) 선택된 그림체 i 개 
    4) 선택된 시놉시스 j개
    장르 필터링된 웹툰들 중에서
    (for문에 for문)
    i*j

    한개의 row에 대해서  
    x * 그림체 유사도 + y * 시놉시스 유사도 +  z * 평점 + w(지수함수)*조회수(평점참여자)
    (cosine유사도 -1~1)  (코싸인 유사도 0~1)    (0~10)    ( 정수값 => 정수범위에 맞춰 labeling)
    (평점참여자 labeling 필요)

    수행  가중치 
    */


    @PostMapping("/calcResult")
    private List<List<ResultValueDTO>> getCalcResult(@RequestBody List<Map<String, List<String>>> params){
        long beforeTime = System.currentTimeMillis();
        List<String> genre = params.get(0).get("genre");
        List<String> drawingStyle = params.get(1).get("drawingStyle");
        List<String> synopsis = params.get(2).get("synopsis");
        
        // 여기서 추천 알고리즘 계산 해야함
        List<FeatureValueDTO> features = webToonMapper.featureValueList(); // 일단 데이터 부르고시자작하자 2만건인데 얼마나 걸릴라나.

        // 0. webtoon 전체 데이터를 불러보자 이거 속도 체크하고 아니다 싶으면 쿼리 여러번 해서 받는걸로 수정?
        List<WebToonDTO> toons = webToonMapper.webtoonList();
        List<WebToonDTO> filteredToon = new ArrayList<>();
        // 1. 고른 장르로 필터링 해놓고
        for (WebToonDTO tmp : toons){
            for (String tmpgenre : genre) {
                if(tmp.getWebtoon_genre().contains(tmpgenre)){
                    filteredToon.add(tmp);
                }
            }
        }

        //  그렇게해서 장르로 한번 필터링한 filtererd임.
        System.out.println(filteredToon.size());
        
        /*
         3) 선택된 그림체 i 개 
         4) 선택된 시놉시스 j개
         장르 필터링된 웹툰들 중에서
         (for문에 for문)
        i*j
         */
        
        for (String imgNum:  drawingStyle){
            for(String synopNum: synopsis){
                for(WebToonDTO toonDTO : filteredToon){
                    /*
                     한개의 row에 대해서
                     x * 그림체 유사도 + y * 시놉시스 유사도 +  z * 평점 + w(지수함수)*조회수(평점참여자)
                     (cosine유사도 -1~1)  (코싸인 유사도 0~1)    (0~10)    ( 정수값 => 정수범위에 맞춰 labeling)
                     (평점참여자 labeling 필요)
                    */
                    toonDTO.getWebtoon_num();
                }
            }
        }
     
        // 랜덤으로 아무값 100개 넣음
        List<Integer> randomWtList = new ArrayList<Integer>();
        int randWtNum = 0;
        for (int i = 0; i < 100; i++)
        {
            randWtNum = (int)(Math.random()*561);
            randomWtList.add(randWtNum);
            while((i != 0) && (randomWtList.get(i-1) == randomWtList.get(i)))
            {
                randomWtList.remove(i);
                randWtNum = (int)(Math.random()*561);
                randomWtList.add(randWtNum);
            }
        }
        



        List<SituationChrFormDTO> sttChrFormList = webToonMapper.getSttChrForm();
        List<List<ResultValueDTO>> result = new ArrayList<List<ResultValueDTO>>();
        
        // 웹툰 번호 넣을때 점수 높은거부터 정렬해서 넣어야 할듯
        for (int i = 0; i < sttChrFormList.size(); i++) {

            result.add(new ArrayList<ResultValueDTO>());

            for (int wt_num : randomWtList) {

                if (result.get(i).size() == 10){
                    break;
                }

                SituationChrDTO sttchrDTO = webToonMapper.getSttChr(wt_num);
                ResultValueDTO resultDTO = webToonMapper.getResultValue(wt_num);
                
                if (sttChrFormList.get(i).getSttchr().equals(sttchrDTO.getTime_chr())){
                    resultDTO.setSttchr(sttchrDTO.getTime_chr());
                    resultDTO.setMent(webToonMapper.getMent(sttchrDTO.getTime_chr()));
                    result.get(i).add(resultDTO);
                }
                else if (sttChrFormList.get(i).getSttchr().equals(sttchrDTO.getPlace_chr())){
                    resultDTO.setSttchr(sttchrDTO.getPlace_chr());
                    resultDTO.setMent(webToonMapper.getMent(sttchrDTO.getPlace_chr()));
                    result.get(i).add(resultDTO);
                }
                else if (sttChrFormList.get(i).getSttchr().equals(sttchrDTO.getWeather_chr())){
                    resultDTO.setSttchr(sttchrDTO.getWeather_chr());
                    resultDTO.setMent(webToonMapper.getMent(sttchrDTO.getWeather_chr()));
                    result.get(i).add(resultDTO);
                }

            }
        }
        long afterTime = System.currentTimeMillis(); 
        long secDiffTime = (afterTime - beforeTime)/1000;
        System.out.println("시간차이(m) : "+secDiffTime);
        
        // List<List<ResultValueDTO>> result = new ArrayList<List<ResultValueDTO>>();

        return result;
    }
}