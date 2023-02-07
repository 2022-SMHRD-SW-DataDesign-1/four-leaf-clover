import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import './style.css';



const ImageList = (test  ) => {
    console.log(test.menuArr.img)
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);
    const [selectImagesrcList, setSelectImagesrcList] = useState([]);
    
    const onChecked = ()=>{
        console.log('oncheck function')
        // console.log('img src list',selectImagesrcList)
        // 부모 태그에 값을 넣어준다
        // getImage(selectImagesrcList)
    }

    // const menuArr = [
    //     { name: '월', content: '월요일만화', img: './img/나쁜 마법사의 꿈.jpg' },
    //     { name: '화', content: '화요일만화', img: './img/별빛 커튼콜.jpg' },
    //     { name: '수', content: '수요일만화', img: './img/산의 시간.jpg' },
    //     { name: '목', content: '목요일만화', img: './img/스치면 인연 스며들면 사랑.jpg' },
    //     { name: '금', content: '금요일만화', img: './img/이런 미친 엔딩.jpg' },
    //     { name: '토', content: '토요일만화', img: './img/6월의 라벤더.jpg' },
    //     { name: '일', content: '일요일만화', img: './img/주부 육성중.jpg' },
    //     { name: '검색', content: '검색만화', img: './img/프로듀스 온리원.jpg' }
    //   ];


    return (
        <>
          <div style={{ marginLeft: '40px' }}>
                <div style={{ fontFamily: 'Cafe24SsurroundAir', fontSize: '20px' }}> {test.menuArr.content}</div>
                <div style={{ marginTop: '10px' }}>
                    
                    {!color ?
                        <img src={require(`${test.menuArr.img}`)} 
                            style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                borderRadius: '10%', width: '200px',
                                border: color ? '6px solid #FDCD58' : ''
                            }} onClick={() => {setShow(true); setSelectImagesrcList([`${test.menuArr.img}`, ...selectImagesrcList]);}} />
                        :
                        <img src={require(`${test.menuArr.img}`) } 
                            style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                borderRadius: '10%', width: '200px',
                                border: color ? '6px solid #FDCD58' : ''
                            }} onClick={() => setColor(false)} />
                    }
                </div>
            </div>
            <Modal show={show} onChecked={onChecked} onClose={() => setShow(false)} onColor={() => setColor(true)} />
        </>
    )
}


export default ImageList;




