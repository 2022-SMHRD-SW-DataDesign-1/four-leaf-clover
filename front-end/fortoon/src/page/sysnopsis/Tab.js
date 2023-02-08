import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import './style.css';



const TabMenu = styled.ul`
    font-weight: bold;
    display: inline-flex;
    flex-direction: row;
    list-style: none;
    margin-top: -0.5rem;
    height: auto;
    margin-left: -2.3rem;
    
    
    
    .submenu {
        display: inline-flex;
        padding: 2.2% ;
        cursor: pointer;
        background-color: #d3d3d3;
        color: gray;
        width: 9.1vw;
        height: 0.1vh;
        border-radius:10px 10px 0px 0px;
        
    }

    .focused{
        display: inline-flex;
        width: calc(100% /8);
        padding: 2.2% ;
        cursor: pointer;
        background-color: #999999;
        color: white;
    }

`;


const Tab = ({getImage, inputValue}) => {

    const menuArr = [
        { name: '월', content: '월요일만화' },
        { name: '화', content: '화요일만화'},
        { name: '수', content: '수요일만화' },
        { name: '목', content: '목요일만화' },
        { name: '금', content: '금요일만화'},
        { name: '토', content: '토요일만화' },
        { name: '일', content: '일요일만화'},
        { name: '검색', content: '검색만화' }
    ];
    const monArr=[
        [{title:'일번만화', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'이번만화', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
        {title:'삼번만화', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'사번만화', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'오번만화', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'육번만화', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        {title:'칠번만화', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        {title:'팔번만화', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' }],

        [{title:'일번만화', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'이번만화', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
        {title:'삼번만화', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'사번만화', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'오번만화', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'육번만화', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        {title:'칠번만화', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        {title:'팔번만화', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' }]
        
    ]

    const [currentTab, setCurrentTab] = useState(0);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);
    const [selectImagesrcList, setSelectImagesrcList] = useState([]);
    
    const imgRef = useRef([])    

    const setSearchMenu = () => {
        if(inputValue != ''){
            selectMenuHandler(7)
        }

    }

    useEffect(setSearchMenu, [inputValue])

    const onChecked = ()=>{
        console.log('oncheck function')
        // console.log('img src list',selectImagesrcList)
        // 부모 태그에 값을 넣어준다
        getImage(selectImagesrcList)
    }

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    const setFlag =(idx)=>{
        console.log(imgRef.current[idx])
        if (!imgRef.current[idx])
            imgRef.current[idx] = true
        else
            imgRef.current[idx] = false
        console.log(imgRef.current[idx])
    }

    return (
        <>
            <div 
            style={{
                    fontFamily: 'Cafe24SsurroundAir',
                    height: '500px',
                    width: '65%',
                    marginTop: '2vh',
                    marginRight:'10%',
                    float:'right',
                    fontSize:'20px',
                    justifyContent: 'center',
                    alignitems: 'center'
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
                <div className="box1" style={{}}>
                    <div style={{ fontFamily: 'Cafe24SsurroundAir', fontSize: '20px', marginTop: '2vh', textAlign:'center'}}> {menuArr[currentTab].content}</div>
                    <div style={{ marginTop: '10px', marginLeft:'50px' , float:'left',}}>
                        {
                            monArr[0].map((i, idx)=>{
                                return (
                                    <>
                                        {!imgRef.current[idx]?
                                        <img src={require(`${i.img}`)} 
                                            style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                                borderRadius: '10%', width: '200px',
                                                border: ''
                                        }} onClick={() => {setShow(true); setSelectImagesrcList([`${i.img}`, ...selectImagesrcList]); setFlag(idx)}}
                                        ref={() => imgRef.current[idx] = false} />
                                        :
                                        <img src={require(`${i.img}`) } 
                                            style={{ boxShadow: '2px 3px 2px #dcdcdc',
                                                borderRadius: '10%', width: '200px',
                                                border: '6px solid #FDCD58' 
                                        }} onClick={setFlag(idx)} ref={() => imgRef.current[idx] = true} />}
                                        <span style={{padding:'13px'}}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <Modal show={show} onChecked={onChecked} onClose={() => setShow(false)} onColor={() => setColor(true)} />
            </div>


        </>
    )

}

export default Tab