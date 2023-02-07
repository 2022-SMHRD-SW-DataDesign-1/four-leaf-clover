import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import './style.css';



const TabMenu = styled.ul`
    background-color: #d3d3d3;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: stretch;
    align-items: center;
    list-style: none;
    margin-top: 0.4rem;
    height: auto;
    
    .submenu {
        display: flex;
        padding: 30px 70px;
        cursor: pointer;
        background-color: #d3d3d3;
        color: gray;
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
    const [show, setShow] = React.useState(false);
    const [color, setColor] = useState(false);
    const [selectImagesrcList, setSelectImagesrcList] = useState([]);

    const onChecked = ()=>{
        console.log('oncheck function')
        // console.log('img src list',selectImagesrcList)
        // 부모 태그에 값을 넣어준다
        getImage(selectImagesrcList)
    }
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };


    // const imgA = (<img src={require(`${menuArr[currentTab].img}`)}
    //     style={{ borderRadius:'10%', width: '200px', 
    //     border:color? '6px solid #FDCD58':'' }} onClick={()=>setColor(false)}/>)

    return (
        <>
            <div style={
                {
                    fontFamily: 'Cafe24SsurroundAir',
                    height: '350px',
                    width: '100%',
                    marginTop: '50px',
                    marginRight:'100px',
                    float:'right'
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
                <div style={{ marginLeft: '40px' }}>

                    <div style={{ fontFamily: 'Cafe24SsurroundAir', fontSize: '20px' }}> {menuArr[currentTab].content}</div>
                    <div style={{ marginTop: '10px' }}>
                        {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)}
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`)}
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                           {!color ?
                            <img src={require(`${menuArr[currentTab].img}`)}
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => {setShow(true); setSelectImagesrcList([`${menuArr[currentTab].img}`, ...selectImagesrcList]);}} />
                            :
                            <img src={require(`${menuArr[currentTab].img}`)}
                                style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                    borderRadius: '10%', width: '200px',
                                    border: color ? '6px solid #FDCD58' : ''
                                }} onClick={() => setColor(false)} />
                        }
                    </div>
                </div>
                <Modal show={show} onChecked={onChecked} onClose={() => setShow(false)} onColor={() => setColor(true)} />
            </div>


        </>
    )

}

export default Tab