import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "./CheckBox";
import GlobalStyles from "./GlobalStyles";
import './CheckBoxListStyle.css';
import ApiService from "../../ApiService"

const CheckBoxList = () => {

  const [genreData, setGenreData] = useState([])


  useEffect(()=>{
    loadGenre()
  },[]);

  const loadGenre = () => {
    ApiService.genre()
    .then(res => {
      console.log(res.data)
      let genreList = []
      let rowList = []
      res.data.map( (text, index) =>  {
        const genre = {
          id: index,
          text: text
        }
      
        rowList.push(genre)

        if (index % 2 == 1)
        {
          genreList.push(rowList)
          //setGenreData(genreData.concat(genreList))
          rowList = []
        }

        setGenreData(genreList)
      })
    
 
    })
    .catch(err =>{
      console.log("axios 에러", err)
    })
  }
  
  return (
    <main style={{height:'70vh', marginBottom:'8vh' }}>
      <GlobalStyles />
        <div style={{
          textAlign:"center", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          fontFamily: 'Cafe24SsurroundAir',
          fontSize:'25px'}}>
          <StyledH1 style={{fontFamily:'Cafe24Ssurround', fontSize:'28px'}}>좋아하는 장르를 선택하세요.</StyledH1>
            <form>
              <div className="StyledFieldset2">
                {genreData.map((item) => {
                  return(
                  <div style={{marginBottom: '1vh', marginTop:'1vh'}} className="checkBoxes" key={item[0].id+item[1].id*10}>
                    <Checkbox key={item[0].id} text={item[0].text}/>
                    <Checkbox key={item[1].id} text={item[1].text}/> 
                  </div>
                )})}
              </div>
            </form>
        </div>
        
    </main>
  );
}




const StyledH1 = styled.h1`
  font-size: 1.25rem;
`;

export default CheckBoxList;