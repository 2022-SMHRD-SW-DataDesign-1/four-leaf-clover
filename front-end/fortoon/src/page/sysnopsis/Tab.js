import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import './style.css';



const TabMenu = styled.ul`
    background-color: #d3d3d3;
    font-weight: bold;
    display: inline-flex;
    flex-direction: row;
    list-style: none;
    margin-top: -0.2rem;
    height: auto;
    width: calc(100% /8);
    
    
    
    .submenu {
        display: inline-flex;
        padding: 2.2% 70px;
        cursor: pointer;
        background-color: #d3d3d3;
        color: gray;
        width: calc(100% /8);
        border-radius:10px 10px 0px 0px;
    }

    .focused{
        display: inline-flex;
        padding: 2.2% 70px;
        cursor: pointer;
        background-color: #999999;
        color: white;
    }

`;


const Tab = ({getImage}) => {
    const menuArr = [
        { name: '월', content: '월요일만화', img: './img/나쁜 마법사의 꿈.jpg' },
        { name: '화', content: '화요일만화', img: './img/별빛 커튼콜.jpg' },
        { name: '수', content: '수요일만화', img: './img/산의 시간.jpg' },
        { name: '목', content: '목요일만화', img: './img/스치면 인연 스며들면 사랑.jpg' },
        { name: '금', content: '금요일만화', img: './img/이런 미친 엔딩.jpg' },
        { name: '토', content: '토요일만화', img: './img/6월의 라벤더.jpg' },
        { name: '일', content: '일요일만화', img: './img/주부 육성중.jpg' },
        { name: '검색', content: '검색만화', img: './img/프로듀스 온리원.jpg' }
      ];

    const [currentTab, setCurrentTab] = useState(0);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);
    const [selectImagesrcList, setSelectImagesrcList] = useState([]);
//ref={el => uni.current.concat(el)}
    const uniRef = useRef([]);


    const onChecked = ()=>{
        console.log('oncheck function')
        // console.log('img src list',selectImagesrcList)
        // 부모 태그에 값을 넣어준다
        getImage(selectImagesrcList)
    }

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };


    return (
        <>
            <div 
            style={{
                    fontFamily: 'Cafe24SsurroundAir',
                    height: '500px',
                    width: '65%',
                    marginTop: '50px',
                    marginRight:'10%',
                    float:'right',
                    borderStyle : 'solid',
                    border: '2px solid gainsboro',
                    borderRadius: '0.5rem'
                }}>
                <TabMenu>
                    {menuArr.map((ele, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={currentTab === index ? "submenu focused" : "submenu"}
                                    onClick={() => selectMenuHandler(index)}
                                > {ele.name}
                                </div>
                            </>
                        )
                    })}
                </TabMenu>
                <div className="box1" style={{textAlign:'center'}}>
                    <div style={{ fontFamily: 'Cafe24SsurroundAir', fontSize: '20px', marginTop: '2vh'}}> {menuArr[currentTab].content}</div>
                    <div style={{ marginTop: '10px' }}>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span> <br/>

                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>{!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>{!color ?
                            <img src={require(`${menuArr[currentTab].img}`)} 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`) } 
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                        <span style={{padding : '30px'}}></span>
                        
                        


                        
                        

                 
                    </div>
                </div>
                <Modal show={show} onChecked={onChecked} onClose={() => setShow(false)} onColor={() => setColor(true)} />
            </div>


        </>
    )

}

export default Tab