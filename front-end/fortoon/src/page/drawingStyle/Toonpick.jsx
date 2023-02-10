import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import './css/ToonpickStyle.css'
import Button from './TrunPageButton';
import ApiService from "../../ApiService";


const Toonpick = styled.div`

  height: auto; 

`;
// const ImgStyle = [
//   [
//     {id: 1,img: "./img/마루는_강쥐.jpg" , color:''},
//     {id: 2,img: "./img/싸움독학.jpg", color:''},
//     {id: 3,img: "./img/참교육.jpg", color:''},
//     {id: 4,img: "./img/아홉수 우리들.jpg", color:''}
//   ],
//   [
//     {id: 5,img: "./img/사형소년.jpg", color:''},
//     {id: 6,img: "./img/여신강림.jpg", color:''},
//     {id: 7,img: "./img/재벌집막내아들.jpg", color:''},
//     {id: 8,img: "./img/연애혁명.jpg" , color:''}
//   ],
//   [
//     {id: 9,img: "./img/마루는_강쥐.jpg", color:''},
//     {id: 10,img: "./img/싸움독학.jpg", color:''},
//     {id: 11,img: "./img/참교육.jpg" ,color:''},
//     {id: 12,img: "./img/아홉수 우리들.jpg", color:''}
//   ],
//   [
//     {id: 13,img: "./img/사형소년.jpg", color:''},
//     {id: 14,img: "./img/여신강림.jpg", color:''},
//     {id: 15,img: "./img/재벌집막내아들.jpg", color:''},
//     {id: 16,img: "./img/연애혁명.jpg", color:''}
//   ]
// ]

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
          color : ''
        }
        rowList.push(setImg)

        if (index % 4 == 3)
        {
          ImgStyle.push(rowList)
          rowList =[]
        }

        setNewImgStyle(ImgStyle)
        // console.log(ImgStyle);

      })
    })
    .catch(err => {
      console.log("axios 에러", err)
    })
  },[])

  // const [test, setTest] = useState();


  //  useEffect(function(){
  //  console.log('Test')
  //  console.log(newImgStyle); 

  // },[newImgStyle])

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
              // onColor={() => setColor(true)}  
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