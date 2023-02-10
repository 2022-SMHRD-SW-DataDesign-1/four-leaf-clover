import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import Tab from "./Tab";
import Locker from './Locker';
import { type } from "@testing-library/user-event/dist/type";
import Button from './TrunPageButton';
import ApiService from "../../ApiService";




const Search1 = () => {

  // 여기가 spring에서 받아올 전체 데이터 대체용 기존데이터에 color와 같은 유니크값 구분용 특성 추가 필요
  const monArr=[
    [
        {title:'별빛 커튼콜', author:'무명1',synopis:'testsetestsetestset2',tag:['하이','바이','크크','오호','리스트','태그'] , img:'./img/별빛 커튼콜.jpg' , color:''},
        {title:'스치면 인연 스며들면 사랑',author:'무명2', synopis:'testsetestsetestset3' , tag:['하이','바이','크크','오호','리스트','태그'] ,img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'이런 미친 엔딩',author:'무명3', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'6월의 라벤더',author:'무명4', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'나쁜 마법사의 꿈',author:'무명5', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'주부 육성중', author:'무명6',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        {title:'프로듀스 온리원',author:'무명7', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        {title:'산의 시간', author:'무명8',synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' }
    ],

    [
        {title:'별빛 커튼콜',author:'무명1', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg'  ,color:''},
        {title:'스치면 인연 스며들면 사랑',author:'무명2', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'나쁜 마법사의 꿈',author:'무명3', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'이런 미친 엔딩',author:'무명4', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'6월의 라벤더',author:'무명5', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'산의 시간', author:'무명6',synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
        {title:'주부 육성중', author:'무명7',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        {title:'프로듀스 온리원',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
    ],
    [
        {title:'별빛 커튼콜',author:'무명1', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
        {title:'산의 시간',author:'무명2', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
        {title:'나쁜 마법사의 꿈',author:'무명3', synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'이런 미친 엔딩',author:'무명4', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'6월의 라벤더',author:'무명5', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'스치면 인연 스며들면 사랑', author:'무명6',synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'주부 육성중',author:'무명7',synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
        {title:'프로듀스 온리원',author:'무명8', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
    ],
    [
        {title:'6월의 라벤더',author:'무명1', synopis:'testsetestsetestset5' , img:'./img/6월의 라벤더.jpg' ,color:''},
        {title:'별빛 커튼콜',author:'무명2', synopis:'testsetestsetestset2' , img:'./img/별빛 커튼콜.jpg' , color:''},
        {title:'이런 미친 엔딩',author:'무명3', synopis:'testsetestsetestset4' , img:'./img/이런 미친 엔딩.jpg',color:''},
        {title:'프로듀스 온리원',author:'무명4', synopis:'testsetestsetestset7' , img:'./img/프로듀스 온리원.jpg',color:''},
        {title:'스치면 인연 스며들면 사랑',author:'무명5', synopis:'testsetestsetestset3' , img:'./img/스치면 인연 스며들면 사랑.jpg',color:''},
        {title:'산의 시간',author:'무명6', synopis:'testsetestsetestset8' , img:'./img/산의 시간.jpg',color:'' },
        {title:'나쁜 마법사의 꿈', author:'무명7',synopis:'testsetestsetestset1' , img: './img/나쁜 마법사의 꿈.jpg', color:''},
        {title:'주부 육성중',author:'무명8', synopis:'testsetestsetestset6' , img:'./img/주부 육성중.jpg',color:''},
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
    ]    
]
  const [inputValue, setInputValue] = useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState()
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  const [monArrTest, setMonArrTest] = useState([]) // 얘가 tab에 값넘겨줄 값 변형해줄 친구
  const [wholeTextArray, setWholeTextArray] = useState([])

  useEffect(() => {
    ApiService.synopsis()
    .then((res) => {
      let tmpList = []
      res.data.map((day) => {
        let dayList = []
        day.map((obj) => {
          let tmpObj = {
            'num': obj.webtoon_num,
            'day': obj.webtoon_day,
            'title': obj.webtoon_title,
            'author': obj.webtoon_writer,
            'synopis': obj.webtoon_synopsis,
            'tag': obj.webtoon_tag,
            'img': obj.webtoon_big_thumbnail_url,
            'color': ''
          }
          dayList.push(tmpObj)
        })
        tmpList.push(dayList)
      })
      setMonArrTest(tmpList)
    })
    .catch((err) => {
      console.log("axios 에러", err)
    })
  },[])

  const title = monArr.map((element) => element.map((element2)=>element2.title)); // 이러면 얘가 각 요일별 웹툰 리스트를 가지고 있음 7번 index는 비었으니까 이거를 검색 된 결과를 넣어주면 되겠다 그치
  const flatTitle = title.flat() // 다차원 배열 하나로 합쳐주기
  const testTitle = [...new Set(flatTitle)] // 얘를 whole arrray text에 넣어놓고 이제 태그 찾아보자
  
  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false)
      setDropDownList([])
      let tempList = monArrTest
      tempList[7]= []
      setMonArrTest(tempList)
    } else {
      let tempList = monArrTest
      tempList[7] =[]
      const choosenTextList = testTitle.filter(textItem =>
        textItem.includes(inputValue),
      )
      setDropDownList(choosenTextList)
      
      
      monArr.map(
        (element)=>element.map(
          (element2)=>choosenTextList.map(
           (i)=>{if(i==element2.title){
            tempList[7].push(element2)
            // tempList[7] = tempList[7].filter((k)=>{
            //   return(k.title == element2.title)
            // })
            
 
           }
          
          }
          )
        )
      );


      setMonArrTest(tempList)
      console.log(tempList)
      
      
    }
  }

  const changeInputValue = event => {

    setInputValue(event.target.value)
    setIsHaveInputValue(true)

  }

  const clickDropDownItem = clickedItem => {
    setInputValue(clickedItem)
    setIsHaveInputValue(false)
  }

  const handleDropDownKey = event => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === 'ArrowDown' &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1)
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1)
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex])
        setDropDownItemIndex(-1)
      }
    }
  }

  useEffect(showDropDownList, [inputValue])

  const [search, setsearch] = useState("");
  const [imagesrc, setImagesrc] = useState([]);
  const [oneImage, setOneimage]= useState();
  

  const onChange = (e) => {
    setsearch(e.target.value)
  }

  // const filterTitle = webToons.filter((webToons) => {
  //   return webToons.text.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
  // })

  const getImage = (img)=>{
    let flag = false;
    let beforeLen = imagesrc.length;
    
    console.log(imagesrc,"얘는 그냥 리스트")
    let filtered = imagesrc.filter((element) => element !== img);
    console.log(filtered,"얘는 필터링된 (중복제거된) 리스트")
    let afterLen = filtered.length;
    if(beforeLen>afterLen){
      flag = true
    }

    if(flag){
      console.log('중복된 놈들은 다뒤졌따')
      setImagesrc(filtered)
    }else{
      console.log('중복이 없었지롱')
      setImagesrc(filtered.concat(img));
    }
  }

  const getOneimage = (img)=>{
      setOneimage(img)
      console.log("원이미지에 아까 고른 그 이미지 값" ,img,"를 넣고")
      getImage(img)
      console.log("getimage 불러다가 리스트안에 있는 값을 필터링으로 지움")
  }


  // 1. 화면 구현이 완료됐을때 
  // useEffect(()=>{},[])

  // 2. imageSrc가 변경되었을때
  // useEffect(()=>{
  //   console.log('Search1 imgsrc : ',imagesrc);
  // },[imagesrc])

  return (
    <>
    <div style={{height:'70vh', marginTop:'7vh', marginLeft: '7vh'}}>
      <Locker imagesrc={imagesrc} getOneimage={getOneimage}/>
      
        <div>
        <WholeBox>
      <div text='AutoComplete' />
      <InputBox isHaveInputValue={isHaveInputValue} 
        style={{
          width:'62vw',
          float:'left', 
          marginLeft:'2rem',
          marginTop:'-1vh'}}>
          <Input 
          style={{fontFamily:'Cafe24SsurroundAir'}}
          type='text'
          placeholder='#태그 / 웹툰제목을 검색하세요.'
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleDropDownKey}
        />
        <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
      </InputBox>
      {isHaveInputValue && (
        <DropDownBox style={{width:'63.68vw', marginRight:'2rem', position:'absolute', zIndex:'2',  marginLeft: '50.2vh', marginTop: '4.9vh'}}>
          {dropDownList.length === 0 && (
            <DropDownItem style={{fontFamily:'Cafe24SsurroundAir'}}>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                {dropDownItem}
              </DropDownItem>
            )
          })}
        </DropDownBox>
      )}
    </WholeBox>
  
          {/* <div className={search[webToons] ? "active" : "none"} /> 
          <input className='search' 
            style={{ 
              fontFamily: 'Cafe24SsurroundAir',
              width: '65vw',
              height: '59%',
              position:'relative',
              // display:'flex',
              marginLeft: '1%'
              // float:'right'
               }} 
            type="text" 
            value={search} 
            onChange={onChange} 
            placeholder=" #태그 / 웹툰제목을 검색하세요. "/> */}
          {/* <div className="navContainer" >
            {filterTitle.map((title) => (
              <div key={title.id}>
                <span>{title.text}</span>
              </div>
            ))}
          </div> */}
        </div>
        <Tab setImagesrc={setImagesrc} getImage={getImage} inputValue={inputValue} oneImage={oneImage} monArrTest={monArrTest}/>
      </div>   
      <Button />
      </>
    
    
  );
};

const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const WholeBox = styled.div`
  padding: 10px;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const DeleteButton = styled.div`
  cursor: pointer;
`

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 999;
  position: relative; 
`

const DropDownItem = styled.li`
  padding: 0 16px;
  &.selected {
    background-color: lightgray;
  }
`

export default Search1;