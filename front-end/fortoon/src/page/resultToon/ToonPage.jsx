import React, { useEffect } from 'react'
import { Carousel } from './MyCarousel'
import Button from './TrunPageButton'
import ApiService from "../../ApiService";

const Toonpage = () => {

    // useEffect(()=>{
    //     ApiService.resultToon()
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // },[]);

    let slides = [
        <img src={require('./css/image/썸김부장.jpg')} alt="1" />,
        <img src={require('./css/image/썸마루는강쥐.jpg')} alt="2" />  ,
        <img src={require('./css/image/썸시월드가내게집착한다.jpg')} alt="3" />  ,
        <img src={require('./css/image/썸싸움독학.jpg')} alt="4" />  ,
        <img src={require('./css/image/썸연애혁명.jpg')} alt="5" />  ,
        <img src={require('./css/image/썸윌유메리미.jpg')} alt="6" />  ,
        <img src={require('./css/image/썸참교육.jpg')} alt="7" />   ];

    return (
        <div>
        <Carousel slides={slides} autoplay={false} interval={1000} arrows={false}></Carousel>
        <Button />
        </div>
    )
}

export default Toonpage