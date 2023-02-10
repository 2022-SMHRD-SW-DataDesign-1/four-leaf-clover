import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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


const Tab = ({getImage, inputValue, oneImage}) => {

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
    let monArr=[
        [
            {title:'월이번만화', author:'무명1',synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'월삼번만화',author:'무명2', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'월요사번만화',author:'무명3', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'월요일오번만화',author:'무명4', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'월우렁뤙ㄹ일번만화',author:'무명5', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'월육번만화', author:'무명6',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'월칠번만화',author:'무명7', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
            {title:'월워러ㅜㄹ팔번만화', author:'무명8',synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' }
        ],

        [
            {title:'화화화이번만화',author:'무명1', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'화요삼번만화',author:'무명2', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'일요화일번만화',author:'무명3', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'화요일사번만화',author:'무명4', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'화여일오번만화',author:'무명5', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'화요일팔번만화', author:'무명6',synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'화요일육번만화', author:'무명7',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'화요오오오ㅗ옹칠번만화',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        ],
        [
            {title:'이번만화',author:'무명1', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'팔번만화',author:'무명2', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'일번만화',author:'무명3', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'사번만화',author:'무명4', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'오번만화',author:'무명5', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'삼번만화', author:'무명6',synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'육번만화',author:'무명7',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'칠번만화',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        ],
        [
            {title:'오번만화',author:'무명1', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'이번만화',author:'무명2', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'사번만화',author:'무명3', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'칠번만화',author:'무명4', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
            {title:'삼번만화',author:'무명5', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'팔번만화',author:'무명6', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'일번만화', author:'무명7',synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'육번만화',author:'무명8', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        ],
        [
            {title:'삼번만화',author:'무명1', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'사번만화',author:'무명2', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'이번만화',author:'무명3', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'오번만화',author:'무명4', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'팔번만화',author:'무명5', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'일번만화',author:'무명6', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'육번만화',author:'무명7', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'칠번만화',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        ],
        [
            {title:'육번만화',author:'무명1', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'일번만화',author:'무명2', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'이번만화',author:'무명3', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'삼번만화',author:'무명4', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'오번만화',author:'무명5', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
            {title:'팔번만화',author:'무명6', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'사번만화',author:'무명7', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'칠번만화',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        ],
        [
            {title:'삼번만화',author:'무명1', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
            {title:'일번만화',author:'무명2', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
            {title:'이번만화',author:'무명3', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
            {title:'팔번만화',author:'무명4', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
            {title:'사번만화',author:'무명5', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
            {title:'칠번만화',author:'무명6', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
            {title:'육번만화',author:'무명7', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
            {title:'오번만화',author:'무명8', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        ],
        [

        ]

        
    ]

    const [currentTab, setCurrentTab] = useState(0);
    const [show, setShow] = useState(false);
    // const [color, setColor] = useState('');
    // const [selectImagesrcList, setSelectImagesrcList] = useState([]);
    const [selectIdx, setSelectIdx] = useState(0);
    const [selectImg, setSelectImg] = useState('');
    const [selectToon, setSelectToon] = useState();
    const [monArrTest, setMonArrTest] = useState(monArr)
    const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
    const forceUpdate = useCallback(() => updateState({}), []);
    const [tempImage, setTempImage] =useState(oneImage);
    const imgRef = useRef([])
    const modalRef = useRef([])

    const setSearchMenu = () => {
        if(inputValue != ''){
            selectMenuHandler(7)
        }

    }

    useEffect(setSearchMenu, [inputValue])

    const onChecked = (choiceImg)=>{
        console.log('onchekc함수지롱 이미지를 search1으로 넘기지롱')
        // console.log('img src list',selectImagesrcList)
        // 부모 태그에 값을 넣어준다
        getImage(choiceImg)
    }

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    const setFlag =(idx)=>{
        
        // console.log(idx)
        // imgRef.current[idx].style.border == ''?
        // imgRef.current[idx].style.border = ' solid 6px #FDCD58'
        // :
        // imgRef.current[idx].style.border = ''

    
        let tmpList = monArrTest

        if(tmpList[currentTab][idx].color == ''){
            tmpList[currentTab][idx].color = 'solid 6px #FDCD58';
        }else{
            tmpList[currentTab][idx].color = ''
        }

        console.log(tmpList)
        setMonArrTest(tmpList)
        
        forceUpdate()
    }

    const showModal = (img, idx,toon) => {
        setSelectIdx(idx)
        setSelectImg(img)
        setSelectToon(toon)
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
                    <div style={{ marginTop: '10px', marginLeft:'2.7%' , float:'left',}}>
                        {
                            monArrTest[currentTab].map((i, idx)=>{
                            
                                return (
                                    <>
                                        {i.color == ''?
                                        <img src={require(`${i.img}`)} 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px'}} 
                                            onClick={() => {showModal(i.img, idx, i); setShow(true);}}
                                            ref={(el) => imgRef.current[idx] = el} />
                                        :
                                        <img src={require(`${i.img}`) } 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px'
                                            }}
                                            onClick={
                                                i.img==oneImage?
                                                    setFlag(idx)
                                                :
                                                    ()=>{setFlag(idx); onChecked(i.img)}
                                            }
                                            ref={(el) => imgRef.current[idx] = el} />}
                                        {/* <span style={{padding:'8px'}}/> */}
                                    </>
                                )
                            })
                        }
                        <Modal show={show} selectToon={selectToon}
                                onChecked={() => onChecked(selectImg)}
                                setFlag ={()=>setFlag(selectIdx)}
                                onClose={() => setShow(false)} />
                    </div>
                </div>
            </div>


        </>
    )

}

export default Tab
