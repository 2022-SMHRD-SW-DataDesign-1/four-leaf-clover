import React from 'react'
import { Carousel } from './MyCarousel'

const TagPage = () => {

    let slides = [
        <img  src="https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg" alt="1" />,
        <img  src="https://shared-comic.pstatic.net/thumb/webtoon/747269/thumbnail/thumbnail_IMAG21_3546074950629798755.jpg" alt="2" />  ,
        <img  src="https://shared-comic.pstatic.net/thumb/webtoon/803480/thumbnail/thumbnail_IMAG21_2e2c5658-1865-4b48-90f8-f9dfa07ab9ef.jpg" alt="3" />  ,
        <img  src="https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg" alt="4" />  ,
        <img src="https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg" alt="5" />   ];

    return (
        <Carousel slides={slides} autoplay={false} interval={1000} arrows={false}></Carousel>
    )
}

export default TagPage