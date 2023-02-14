import React, { useEffect, useState } from 'react'
import { Carousel } from './MyCarousel'
import ApiService from "../../ApiService";
import { useLocation } from 'react-router-dom';

const Toonpage = () => {

    const [resultList, setResultList] = useState([])
    const [slides, setSlides] = useState([])
    const location = useLocation();

    useEffect(()=>{
        let resultData = location.state.outputList;
        console.log(resultData);
        let tmpList = [];
        resultData.map((item) => {
            tmpList.push({
                'thumb' : item.webtoon_big_thumbnail_url,
                'url' : item.webtoon_url
            })
        })
        setResultList(tmpList);
    },[]);

    useEffect(() => {
        let tmpList = []
        resultList.map((result, idx) => {
            tmpList.push(<a href={result.url}><img src={`${result.thumb}`} alt={idx} /></a>)
        })
        console.log(tmpList);
        setSlides(tmpList)
    },[resultList])


    return (
        <div>
            <Carousel slides={slides} autoplay={false} interval={1000} arrows={false}></Carousel>
        </div>
    )
}

export default Toonpage