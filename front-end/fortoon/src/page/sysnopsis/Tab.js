import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import ApiService from '../../ApiService';
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


const Tab = ({getImage, inputValue, oneImage, monArrTest}) => {

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
    const [monArrTest2, setMonArrTest2] = useState([])
    const [currentTab, setCurrentTab] = useState(0);
    const [show, setShow] = useState(false);
    const [selectIdx, setSelectIdx] = useState(0);
    const [selectImg, setSelectImg] = useState('');
    const [selectToon, setSelectToon] = useState();
    const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
    const forceUpdate = useCallback(() => updateState({}), []);
    const imgRef = useRef([])
    const modalRef = useRef([])
    const [loadingImg, setLoadingImg] = useState('')

    const setSearchMenu = () => {
        if(inputValue != ''){
            selectMenuHandler(7)
        }

    }

    useEffect(setSearchMenu, [inputValue])
    useEffect(()=>setMonArrTest2(monArrTest))
    useEffect(()=>{
        ApiService.imageLoad('clover_loading.gif')
        .then(res => {
            setLoadingImg(res.data)
        })
        .catch(err => {
            console.log('axios 에러', err)
        })
    },[])

    const onChecked = (choiceImg)=>{
        
        // 부모 태그에 값을 넣어준다
        getImage(choiceImg)
    }

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    const setFlag =(idx)=>{
    
        let tmpList = monArrTest2

        if(tmpList[currentTab][idx].color == ''){
            tmpList[currentTab][idx].color = 'solid 6px #FDCD58';
        }else{
            tmpList[currentTab][idx].color = ''
        }

        setMonArrTest2(tmpList)
        
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
                
                <div className="box-tab" style={{textAlign: 'center'}}>
                    <div style={{ fontFamily: 'Cafe24SsurroundAir', fontSize: '20px', marginTop: '2vh', textAlign:'center'}}> {menuArr[currentTab].content}</div>
                    <div style={{ marginTop: '10px'}}>
                        {
                            (monArrTest2[currentTab] == undefined)?
                             <div><img src={`data:image/;base64,${loadingImg}`} style={{width:'20vw', height:'20wh'}}></img></div>:
                             monArrTest2[currentTab].map((i, idx)=>{
                                return (
                                    <>
                                        {i.color == ''?
                                        <img src={`${i.img}`} 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px'}} 
                                            onClick={() => {showModal(i.img, idx, i); setShow(true);}}
                                            ref={(el) => imgRef.current[idx] = el} />
                                        :
                                        <img src={`${i.img}` } 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px',
                                                    boxSizing: 'border-box'
                                            }}
                                            onClick={
                                                i.img==oneImage?
                                                    setFlag(idx)
                                                :
                                                    ()=>{setFlag(idx); onChecked(i.img)}
                                            }
                                            ref={(el) => imgRef.current[idx] = el} />}
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
