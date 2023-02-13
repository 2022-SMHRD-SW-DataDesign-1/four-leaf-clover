import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiService from '../../ApiService';
import { Carousel } from './MyCarouselTag'

const TagPage = () => {

    const [loadingImg, setLoadingImg] = useState()
    const [donCalc, setDonCalc] = useState(false);
    const [result, setResult] = useState([]);
    const [resultTagData, setResultTagData] = useState({});
    const location = useLocation();

    let slides = [
        <img src={require('./css/image/tagcard01.jpg')} alt="1" />,
        <img src={require('./css/image/asdf.png')} alt="2" />  ,
        <img src={require('./css/image/image (36).png')} alt="3" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_000011211.png')} alt="4" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_000250607.png')} alt="5" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_100329583_02.jpg')} alt="6" />  ,
        <img src={require('./css/image/KakaoTalk_20230114_235510935.png')} alt="7" />
    ];

    let tags = ['asdf','qwe','zxcv','fghj','cnbv','rtyu','yuio','bnm,','qsdcv','zxdr','rhgrn','cvhu']

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
            // console.log(res.data)
            setResult(res.data)
            setDonCalc(true)
        })
        .catch((err) => {
            console.log("axios에러", err)
        })
    },[]);

    useEffect(() => {
        let resultData = []
        result.map(resultItemList => {
            let tagData = {}
            if (resultItemList.length == 10){
            tagData['sttchr'] = resultItemList[0].sttchr
            tagData['ment'] = resultItemList[0].ment
            let tagList = []
            let tmpList = []
            resultItemList.map( item => {
                tagList.push(item.webtoon_tag)
            })
            ApiService.getTag(tagList)
            .then(res => {
                tmpList = tmpList.concat(res.data)
                tagData['tags'] = tmpList
                // console.log(tagData['tags'])
            })
            .catch(err => {
                console('axios 에러', err)
            })
            }
            if (Object.keys(tagData).length != 0){
            resultData.push(tagData)
            }
        })
        console.log(resultData)
        setResultTagData(resultData)
    }, [donCalc])
    

    return (
        !donCalc ?
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height:'700px', marginBottom:'1vh',marginTop: '4vh'}}>
            <img src={`data:image/;base64,${loadingImg}`} style={{width: '50vh', height:'50vh'}}/>
        </div>
        :
        <div>
            <Carousel slides={slides} autoplay={false} interval={1000} arrows={false} resultTagData={resultTagData}></Carousel>
        </div>
    )
}

export default TagPage