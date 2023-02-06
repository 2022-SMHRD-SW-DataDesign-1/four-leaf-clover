import React, {useState} from 'react';
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
      {id: 1,img: "./img/마루는_강쥐.jpg"},
      {id: 2,img: "./img/싸움독학.jpg"},
      {id: 3,img: "./img/참교육.jpg"},
      {id: 4,img: "./img/아홉수 우리들.jpg"}
    ]
  },
  {
    id: 'row-box2',
    imgs:
    [
      {id: 5,img: "./img/사형소년.jpg"},
      {id: 6,img: "./img/여신강림.jpg"},
      {id: 7,img: "./img/재벌집막내아들.jpg"},
      {id: 8,img: "./img/연애혁명.jpg"}
    ]
  },
  {
    id: 'row-box3',
    imgs:
    [
      {id: 9,img: "./img/마루는_강쥐.jpg"},
      {id: 10,img: "./img/싸움독학.jpg"},
      {id: 11,img: "./img/참교육.jpg"},
      {id: 12,img: "./img/아홉수 우리들.jpg"}
    ]
  },
  {
    id: 'row-box4',
    imgs:
    [
      {id: 13,img: "./img/사형소년.jpg"},
      {id: 14,img: "./img/여신강림.jpg"},
      {id: 15,img: "./img/재벌집막내아들.jpg"},
      {id: 16,img: "./img/연애혁명.jpg"}
    ]
  }
]

function ToonChoice()  {
  const [show, setShow] = React.useState(false);
  const [color, setColor] = useState(false);

  return (
    <>
      <Toonpick>
        <div>
            <h1>좋아하는 그림체를 선택하세요</h1>
            <div className='box'>
              {ImgStyle.map((i) =>
                <div className='box-row' key={i.id}>
                {
                  i.imgs.map((j) =>
                    {
                      return(
                        !color ?
                        <img src={require(`${j.img}`)} alt='toon' className={j.id} key={j.id}
                        style={{border:color ? '6x solid #FDCD58':''}} onClick={() => setShow(true)}/>
                        :
                        <img src={require(`${j.img}`)} alt='toon' className={j.id} key={j.id}
                        style={{border:color ? '6px solid #FDCD58':''}} onClick={() => setColor(false)} />
                      )
                    }
                  )
                }
                </div>
              )}
              <Modal show={show} onClose={() => setShow(false)} onColor={() => setColor(true)} />    
            </div>
          <Button />
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;