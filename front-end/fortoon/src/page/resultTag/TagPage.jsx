import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiService from '../../ApiService';
import { Carousel } from './MyCarouselTag'

const TagPage = () => {

    const [loadingImg, setLoadingImg] = useState()
    const [donCalc, setDonCalc] = useState(false);
    const [result, setResult] = useState([]);
    // const [resultTagData, setResultTagData] = useState([]);
    const [slides, setSlides] = useState([]);
    const [cnt, setCnt] = useState(0);
    const location = useLocation();

    // let slides = [
    //     <img src={require('./css/image/tagcard01.jpg')} alt="1" />,
    //     <img src={require('./css/image/asdf.png')} alt="2" />  ,
    //     <img src={require('./css/image/image (36).png')} alt="3" />  ,
    //     <img src={require('./css/image/KakaoTalk_20230115_000011211.png')} alt="4" />  ,
    //     <img src={require('./css/image/KakaoTalk_20230115_000250607.png')} alt="5" />  ,
    //     <img src={require('./css/image/KakaoTalk_20230115_100329583_02.jpg')} alt="6" />  ,
    //     <img src={require('./css/image/KakaoTalk_20230114_235510935.png')} alt="7" />,
    // ];

    useEffect(()=>{
        ApiService.imageLoad("clover_loading.gif")
        .then(res => {
            setLoadingImg(res.data)
        })
        .catch(err => {
            console.log('axios 에러', err)
        })
        let sendValue = location.state.sendValue
        ApiService.calcResult(sendValue.sendValue)
        .then((res) => {
            console.log(res.data)
            setResult(res.data)
            setDonCalc(true)
        })
        .catch((err) => {
            console.log("axios에러", err)
        })
    },[]);

    useEffect(() => {
        // let resultData = []
        let sttchrList = []
        let mentList = []
        let tagsList = []
        console.log(result);
        result.map(resultItemList => {
            // let tagData = {}
            if (resultItemList.length == 10){
            sttchrList.push(resultItemList[0].sttchr)
            mentList.push(resultItemList[0].ment)
            // tagData['ment'] = resultItemList[0].ment
            // tagData['sttchr'] = resultItemList[0].sttchr
            let tagList = []
            let tmpList = []
            resultItemList.map( item => {
                tagList.push(item.webtoon_tag)
            })
            ApiService.getTag(tagList)
            .then(res => {
                tmpList = tmpList.concat(res.data)
                tagsList.push(tmpList)
                // tagData['tags'] = tmpList
                // console.log(tagData['tags'])
            })
            .catch(err => {
                console('axios 에러', err)
            })
            }
            // if (Object.keys(tagData).length != 0){
            //     resultData.push(tagData)
            // }
        })
        // console.log(resultData)
        console.log('sttchr: ',sttchrList)
        console.log('ment :',mentList);
        console.log('tags :',tagsList);

        let tmpSlides = [];
        for (let i = 0; i < sttchrList.length; i++) {
            ApiService.slideImageLoad(sttchrList[i]+'.png')
            .then(res => {
                tmpSlides.push({
                    class : 'slider-single proactivede',
                    element : <img src={`data:image/;base64,${res.data}`} alt={i+1} key={sttchrList[i]}></img>,
                    ment : mentList[i],
                    tags : tagsList[i],
                    sttchr : sttchrList[i],
                    index : i
                })
            })
            .catch(err => {
                console.log('axios 에러', err)
            })
        }
        console.log('tmpslides: ',tmpSlides)
        setSlides(tmpSlides);
        setCnt(sttchrList.length);
        // setResultTagData(resultData)
    }, [donCalc])

    return (
        !donCalc ?
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', width:'100%', height:'700px', marginBottom:'1vh',marginTop: '4vh'}}>
            <img src={`data:image/;base64,${loadingImg}`} style={{width: '50vh', height:'50vh'}}/>
            <div>웹툰을 선택중입니다!</div>
        </div>
        :
        <div>
            {slides&&<Carousel slides={slides} autoplay={false} interval={1000} arrows={false} cnt={cnt} result={result}></Carousel>}
        </div>
    )
}

export default TagPage