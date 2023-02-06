import React from "react";
import styled from "styled-components";
import Checkbox from "./CheckBox";
import GlobalStyles from "./GlobalStyles";
import './CheckBoxListStyle.css';
import Button from '../drawingStyle/TrunPageButton';

const genreData = [ 
  { id1: 0, id2: 1, text1: "코믹 / 개그", text2: "액션"},
  { id1: 2, id2: 3, text1: "판타지", text2: "로맨스 판타지"},
  { id1: 4, id2: 5, text1: "일상", text2: "드라마"},
  { id1: 6, id2: 7, text1: "현대 로맨스", text2: "학원물"},
  { id1: 8, id2: 9, text1: "무협 / 사극", text2: "공포 / 스릴러"},
  { id1: 10, id2: 11, text1: "스포츠", text2: "성인물"},
  { id1: 12, id2: 13, text1: "교양 / 지식", text2: "기타"},
];

function CheckBoxList() {

  return (
    <main style={{height: "auto", marginBottom: "6vh"}}>
      <GlobalStyles />
        <div style={{textAlign:"center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <StyledH1>좋아하는 장르를 선택하세요.</StyledH1>
            <form>
              <div className="StyledFieldset2">
                {genreData.map((item) => (
                  <div className="checkBoxes">
                    <Checkbox key={item.id1} text={item.text1} />
                    <Checkbox key={item.id2} text={item.text2} />
                  </div>
                ))}
              </div>
            </form>
        </div>
        <Button/>
        
    </main>
  );
}




const StyledH1 = styled.h1`
  font-size: 1.25rem;
`;

export default CheckBoxList;