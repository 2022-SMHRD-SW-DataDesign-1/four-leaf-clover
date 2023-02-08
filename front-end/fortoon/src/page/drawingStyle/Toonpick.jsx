import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import './css/ToonpickStyle.css'
import Button from './TrunPageButton';

const Toonpick = styled.div`

  height: auto; 

`;
const ImgStyle = [
  {
    id: 'row-box1',
    imgs:
    [
      {id: 1,img: "./img/마루는_강쥐.jpg" , color:''},
      {id: 2,img: "./img/싸움독학.jpg", color:''},
      {id: 3,img: "./img/참교육.jpg", color:''},
      {id: 4,img: "./img/아홉수 우리들.jpg", color:''}
    ]
  },
  {
    id: 'row-box2',
    imgs:
    [
      {id: 5,img: "./img/사형소년.jpg", color:''},
      {id: 6,img: "./img/여신강림.jpg", color:''},
      {id: 7,img: "./img/재벌집막내아들.jpg", color:''},
      {id: 8,img: "./img/연애혁명.jpg" , color:''}
    ]
  },
  {
    id: 'row-box3',
    imgs:
    [
      {id: 9,img: "./img/마루는_강쥐.jpg", color:''},
      {id: 10,img: "./img/싸움독학.jpg", color:''},
      {id: 11,img: "./img/참교육.jpg" ,color:''},
      {id: 12,img: "./img/아홉수 우리들.jpg", color:''}
    ]
  },
  {
    id: 'row-box4',
    imgs:
    [
      {id: 13,img: "./img/사형소년.jpg", color:''},
      {id: 14,img: "./img/여신강림.jpg", color:''},
      {id: 15,img: "./img/재벌집막내아들.jpg", color:''},
      {id: 16,img: "./img/연애혁명.jpg", color:''}
    ]
  }
]

function ToonChoice()  {
  const [show, setShow] = React.useState(false);
  const [newImgStyle , setNewImgStyle] = useState(ImgStyle);
  const [choice2, setChoice2] = useState(0);
  const [choice1, setChoice1] = useState(0);  

  // const [test, setTest] = useState();


  //  useEffect(function(){
  //  console.log('Test')
  //  console.log(newImgStyle); 

  // },[newImgStyle])

  function test(index1, index2){
    let list = newImgStyle;
    list[index1].imgs[index2].color=""
    setNewImgStyle(list.map((data)=> {return(data)}));

  }


  return (
    <>
      <Toonpick>
        <div>
            <h1>좋아하는 그림체를 선택하세요</h1>
            <div className='box'>
            
              
               {newImgStyle.map((i, index1) =>{                
           
                 return(
                <div className='box-row' key={index1}>
                {

                  i.imgs.map((j, index2) =>
                    {
                      // console.log(index2)
                      return(
                        // !color ?
                        newImgStyle[index1].imgs[index2].color==''?
                        <img src={require(`${j.img}`)} alt='toon' className={j.id} key={j.id}
                        style={{border:newImgStyle[index1].imgs[index2].color}} 
                        onClick={() => {setShow(true); setChoice2(index2); setChoice1(index1)}}/>

                        :<img src={require(`${j.img}`)} alt='toon' className={j.id} key={j.id}
                        style={{border:newImgStyle[index1].imgs[index2].color}} 
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
          <Button />
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;