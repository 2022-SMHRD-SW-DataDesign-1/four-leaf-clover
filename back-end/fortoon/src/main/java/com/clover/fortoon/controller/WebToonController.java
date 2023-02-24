package com.clover.fortoon.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Base64.Encoder;
import java.util.Map.Entry;
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
import com.clover.fortoon.model.SynopSimDTO;

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

    // 로그함수여~
    public double log_n (double n, double x) {

        return Math.log(x) / Math.log(n);
        
    }


    @PostMapping("/calcResult")
    private List<List<ResultValueDTO>> getCalcResult(@RequestBody List<Map<String, List<String>>> params){
        long beforeTime = System.currentTimeMillis();
        List<String> genre = params.get(0).get("genre");
        List<String> drawingStyle = params.get(1).get("drawingStyle");
        List<String> synopsis = params.get(2).get("synopsis");
        
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
        // 여기서 추천 알고리즘 계산 해야함
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
         (for문에 for문) i*j*필터링된 웹툰만큼 for문 돌아
        
         */
        
         //도대체 어디서 오류가나는거여 싯펄! 그거 찾을 변수
        int testcase =0;
        // features
        // synops
        //여기에다 아래 값 담을껏인디
        List<List<ResultValueDTO>> algorithmResult = new ArrayList<List<ResultValueDTO>>();
        //얘가 모든 리스트 값을 다 담을 hash map
        Map<Integer, Float> testMap = new HashMap<Integer, Float>();

        for (String imgNum:  drawingStyle){
            for(String synopNum: synopsis){
                for(WebToonDTO toonDTO : filteredToon){
                    // 사용자 선택이미지 기준 필터링된 웹툰과 그림체 유사도 -1~1
                    Float imgSim = Float.parseFloat(webToonMapper.featureValueList(Integer.parseInt(imgNum),toonDTO.getWebtoon_num())) ; 
                    // System.out.println("그림체유사도 통과");

                    // 사용자 선택 시놉시스 기준 필터링된 웹툰과 시놉시스 유사도 0~1
                    Float synopSim =  Float.parseFloat(webToonMapper.synopsSimList(Integer.parseInt(synopNum),toonDTO.getWebtoon_num()));
                    // System.out.println("시놉유사도 통과");

                    // 타겟 웹툰의 평점
                    Float rating =  toonDTO.getWebtoon_rating();
                    // System.out.println("평점 통과");

                    // 타겟 웹툰의 평점 총 잠여자
                    Integer participants = toonDTO.getWebtoon_rating_count();
                    // 아니 생각해보니까 참여자별로 라벨링해서 값나눠주고 로그함수에 넣을꺼면 애초에 걍 12345까지 값줘버리면 되는거아잉교?
                    // 유사도가 0~10, 평점이 0~10이니까 얘는 그냥 0~4 주자 이게 바로 발상의전환!
                    if(participants>8331904){
                        participants = 0;
                    }else if(participants>303285){
                        participants = 1;
                    }else if(participants>146288){
                        participants = 2;
                    }else if(participants>16757){
                        participants = 3;
                    }else{
                        participants = 4;
                    }
                    // System.out.println("조회수 통과");
                    
        
                    /*
                    *             위의 값들에 대해서 다음과 같은 계산 적용
                    *           x * 그림체 유사도 + y * 시놉시스 유사도 +  z * 평점 + w(지수함수)*조회수(평점참여자)
                    *             (cosine유사도 -1~1)  (코싸인 유사도 0~1)    (0~10)    ( 정수값 => 정수범위에 맞춰 labeling)
                    *               
                    *            (평점참여자 labeling 필요)
                    *
                    * 
                    *       경우 -1<그림체유사도< 0의  값을 갖는 경우 1을 더한다.
                    *       이렇게 구한 값을 sorting하고 타겟 웹툰 넘버를 저장하는 map을만들어서 연속 쿼리. 그리고이걸
                    */
                    Float resultScore =  imgSim*10+synopSim*10+rating+ participants;
                    // System.out.println(resultScore);
                    // System.out.println(testcase+"번째 웹툰 탐색중");
                    // testcase += 1;
                    // toonDTO.getWebtoon_num();
                    testMap.put( toonDTO.getWebtoon_num() , resultScore);
                }
            }
        }
        // for문을 끝냈으니 넣은 값을 value기준 내림차순 정렬을 해보자
        List<Entry<Integer, Float>> list_entries = new ArrayList<Entry<Integer, Float>>(testMap.entrySet());
        Collections.sort(list_entries, new Comparator<Entry<Integer, Float>>() {
			// compare로 값을 비교
			public int compare(Entry<Integer, Float> obj1, Entry<Integer, Float> obj2)
			{
				// 내림 차순으로 정렬
				return obj2.getValue().compareTo(obj1.getValue());
			}
		});

        //이제 저sorting 된 list에 있는 key값을 hrList에 담고 연속 쿼리 조짐되는데[]

        List<Integer> hrList = new ArrayList<Integer>();
        testMap.forEach((key, value)->{
            hrList.add(key);
        });
       
       
       
        // // 랜덤으로 아무값 100개 넣음
        // List<Integer> randomWtList = new ArrayList<Integer>();
        // int randWtNum = 0;
        // for (int i = 0; i < 100; i++)
        // {
        //     randWtNum = (int)(Math.random()*561);
        //     randomWtList.add(randWtNum);
        //     while((i != 0) && (randomWtList.get(i-1) == randomWtList.get(i)))
        //     {
        //         randomWtList.remove(i);
        //         randWtNum = (int)(Math.random()*561);
        //         randomWtList.add(randWtNum);
        //     }
        // }
        



        List<SituationChrFormDTO> sttChrFormList = webToonMapper.getSttChrForm();
        List<List<ResultValueDTO>> result = new ArrayList<List<ResultValueDTO>>();
        
        // 웹툰 번호 넣을때 점수 높은거부터 정렬해서 넣어야 할듯
        for (int i = 0; i < sttChrFormList.size(); i++) {

            result.add(new ArrayList<ResultValueDTO>());

            for (int wt_num : hrList) {//randomWtList

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