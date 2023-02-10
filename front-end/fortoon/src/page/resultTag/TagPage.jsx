import React from 'react'
import { Carousel } from './MyCarousel'

const TagPage = () => {

    let slides = [
        <img src={require('./css/image/tagcard01.jpg')} alt="1" />,
        <img src={require('./css/image/asdf.png')} alt="2" />  ,
        <img src={require('./css/image/image (36).png')} alt="3" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_000011211.png')} alt="4" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_000250607.png')} alt="5" />  ,
        <img src={require('./css/image/KakaoTalk_20230115_100329583_02.jpg')} alt="6" />  ,
        <img src={require('./css/image/KakaoTalk_20230114_235510935.png')} alt="7" />   ];

    return (
        <div>
        <Carousel slides={slides} autoplay={false} interval={1000} arrows={false}></Carousel>
        </div>
    )
}

export default TagPage