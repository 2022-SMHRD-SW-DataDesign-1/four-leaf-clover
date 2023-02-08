import React, { useEffect, useState } from 'react'
import { Carousel } from './MyCarousel'
import Button from './TrunPageButton'
import ApiService from "../../ApiService";

const Toonpage = () => {

    const [bigThumbList, setBigThumbList] = useState([])

    useEffect(()=>{
        ApiService.resultToon()
        .then(res => {
            let tmpList = []
            res.data.map( thumbUrl => {
            tmpList.push(thumbUrl)
            })
            console.log(tmpList)
            setBigThumbList(tmpList)
        })
    },[]);

    // let slides = [
    //     <img src={`${bigThumbList[10]}`} alt="1" />,
    //     <img src={`${bigThumbList[8]}`} alt="2" />  ,
    //     <img src={`${bigThumbList[500]}`} alt="3" />  ,
    //     <img src={`${bigThumbList[380]}`} alt="4" />  ,
    //     <img src={`${bigThumbList[70]}`} alt="5" />  ,
    //     <img src={`${bigThumbList[410]}`} alt="6" />  ,
    //     <img src={`${bigThumbList[80]}`} alt="7" />   ];

    let slides = [];

    for (let i = 0; i < 10; i++) {
        slides.push(<img src={`${bigThumbList[i]}`} alt={i+1} />)
    }

    return (
        <div>
            <Carousel slides={slides} autoplay={false} interval={1000} arrows={false}></Carousel>
            <Button />
        </div>
    )
}

export default Toonpage