import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import Tab from "./Tab";
import Locker from './Locker';
import Button from './TrunPageButton';
import ApiService from "../../ApiService";

const Search1 = () => {

  const [inputValue, setInputValue] = useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState()
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  const [monArrTest, setMonArrTest] = useState([]) // 얘가 tab에 값넘겨줄 값 변형해줄 친구

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

  const title = monArrTest.map((element) => element.map((element2)=>element2.title)); // 이러면 얘가 각 요일별 웹툰 리스트를 가지고 있음 7번 index는 비었으니까 이거를 검색 된 결과를 넣어주면 되겠다 그치
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
        textItem.includes(inputValue)
      )
      setDropDownList(choosenTextList)
      
      monArrTest.map((element) => 
        element.map((element2) =>
          choosenTextList.map((i) => {
            if(i==element2.title){
              tempList[7].push(element2)
            }
          }
          )
        )
      );
      tempList[7] = [...new Set(tempList[7])] 

      setMonArrTest(tempList)
      
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

  useEffect(()=>{
    showDropDownList()
  }, [inputValue])

  const [imagesrc, setImagesrc] = useState([]);
  const [oneImage, setOneimage] = useState();

  const getImage = (img)=>{
    let flag = false;
    let beforeLen = imagesrc.length;
    
    let filtered = imagesrc.filter((element) => element !== img);
    let afterLen = filtered.length;
    if(beforeLen > afterLen){
      flag = true
    }

    if(flag){
      setImagesrc(filtered)
    }else{
      setImagesrc(filtered.concat(img));
    }
  }

  const getOneimage = (img)=>{
      setOneimage(img)
      getImage(img) 
  }

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
                placeholder='웹툰제목을 검색하세요.'
                value={inputValue}
                onChange={changeInputValue}
                onKeyUp={handleDropDownKey}
              />
              <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
            </InputBox>
              {isHaveInputValue && (
                <DropDownBox className="inputBox" style={{width:'63.68vw', height:'30vh', position:'absolute', zIndex:'2',  marginLeft: '51.8vh', marginTop: '4.9vh', overflow: "auto"}}>
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
      </div>
      <Tab setImagesrc={setImagesrc} getImage={getImage} inputValue={inputValue} oneImage={oneImage} monArrTest={monArrTest}/>
    </div>   
    <Button imagesrc={imagesrc} monArrTest={monArrTest} />
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