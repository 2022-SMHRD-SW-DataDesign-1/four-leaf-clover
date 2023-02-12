import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import './css/ToonpickStyle.css'
import Button from './TrunPageButton';
import ApiService from "../../ApiService";


const Toonpick = styled.div`

  height: auto; 

`;

function ToonChoice()  {
  const [show, setShow] = React.useState(false);

  const [newImgStyle , setNewImgStyle] = useState([]);
  
  const [choice2, setChoice2] = useState(0);
  const [choice1, setChoice1] = useState(0);  
  

  useEffect(()=>{
    ApiService.drawingStyle()
    .then(res =>{
      console.log(res.data)
      let ImgStyle =[]
      let rowList =[]
      res.data.map((value, index)=>{
        const setImg ={
          id : index,
          img : value.webtoon_thumbnail_url,
          num : value.webtoon_num,
          path : value.filename,
          color : ''
        }
        rowList.push(setImg)

        if (index % 4 == 3)
        {
          ImgStyle.push(rowList)
          rowList =[]
        }
      })
      setNewImgStyle(ImgStyle)
      console.log(ImgStyle);
    })
    .catch(err => {
      console.log("axios 에러", err)
    })
  },[])

  function test(index1, index2){
    let list = newImgStyle;
    list[index1][index2].color=""
    setNewImgStyle(list.map((data)=> {return(data)}));
  }


  return (
    <div style={{height:'70vh', marginBottom:'4.3vh'}}>
        <div style={{ marginTop: '4vh'}}>
            <h1 style={{
              fontFamily:'Cafe24Ssurround',
              fontSize:'28px'}}
              > 좋아하는 그림체를 선택하세요. </h1>
            <div className='box'>
            
              
               {newImgStyle.map((i, index1) =>{                
           
                return(
                <div className='box-row' key={index1}>
                {

                  i.map((j, index2) =>
                    {
                      // console.log(index2)
                      return(
                        // !color ?
                        newImgStyle[index1][index2].color==''?
                        <img src={`${j.img}`} alt='toon' className={j.id} key={j.id}
                        style={{border:newImgStyle[index1][index2].color}} 
                        onClick={() => {setShow(true); setChoice2(index2); setChoice1(index1)}}/>

                        :<img src={`${j.img}`} alt='toon' className={j.id} key={j.id}
                        style={{border:newImgStyle[index1][index2].color}} 
                        // 보더 없애야함
                        onClick={() => {test(index1, index2);}}/>
                        
                        // :6px solid #FDCD58
                        // <img src={require(`${j.img}`)} alt='toon' className={j.id} key={j.id}
                        // style={{border:color ? '6px solid #FDCD58':''}} onClick={() => setColor(false)} />
                      )
                    }
                  )


                }
               
                </div>
                 )
               }
              )} 

              <Modal 
              show={show} 
              onClose={() => setShow(false)} 
              onChoice1={choice1}
              onChoice2={choice2}
              imgList = {newImgStyle}
              setNewImgStyle={setNewImgStyle}
              />    

            </div>
          <Button drawingStyleOutput={newImgStyle} />
        </div>
    </div>
  );
}


export default ToonChoice;