import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import Tab from "./Tab";
import Locker from './Locker';


const wholeTextArray = [
  '6월의 라벤더',
  '나쁜 마법사의 꿈',
  '별빛 커튼콜',
  '산의 시간',
  '스치면 인연 스며들면 사랑',
  '이런 미친 엔딩',
  '주부 육성중',
  '#태그',
  '#실험용',
  '#샵문자',
  '#찾나',
  '#봐야지',
]

const Search1 = () => {
  const [inputValue, setInputValue] = useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState(wholeTextArray)
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  

  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false)
      setDropDownList([])
    } else {
      const choosenTextList = wholeTextArray.filter(textItem =>
        textItem.includes(inputValue),
      )
      setDropDownList(choosenTextList)
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
  const [imagesrc, setImagesrc] = useState();

  const onChange = (e) => {
    setsearch(e.target.value)
  }

  // const filterTitle = webToons.filter((webToons) => {
  //   return webToons.text.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
  // })

  const getImage = (img)=>{

    console.log('getImage img',img[0])
    setImagesrc(img[0].split('/')[2])
  }



  // 1. 화면 구현이 완료됐을때 
  // useEffect(()=>{},[])

  // 2. imageSrc가 변경되었을때
  // useEffect(()=>{
  //   console.log('Search1 imgsrc : ',imagesrc);
  // },[imagesrc])

  return (
    <div style={{height:'70vh', marginTop:'8vh'}}>
      <Locker imagesrc={imagesrc} />
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
        <DropDownBox style={{width:'63.65vw', marginLeft:'2rem', float:'left', marginRight:'2rem'}}>
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
        <Tab setImagesrc={setImagesrc} getImage={getImage} inputValue={inputValue} />
      </div>   
      
    
    
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
  z-index: 3;
`

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`

export default Search1;