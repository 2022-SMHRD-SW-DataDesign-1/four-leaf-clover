import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import './css/ToonpickStyle.css'
import Button from './TrunPageButton';

const Toonpick = styled.div`

  height: auto; 

`;


function ToonChoice()  {
  const [show, setShow] = React.useState(false);
  const [color, setColor] = useState(false);

  return (
    <>
      <Toonpick>
        <div>
            <h1>좋아하는 그림체를 선택하세요</h1>
            <div className='box'>
              <div className='box-row'>
                {
                  !color?
                  <img src={require("./img/마루는_강쥐.jpg")} alt='toon' className='toonImg' 
                  style={{border:color ? '6px solid #FDCD58':''}} onClick={() => setShow(true)} />
                  : 
                  <img src={require("./img/마루는_강쥐.jpg")} alt='toon' className='toonImg' 
                  style={{border:color ? '6px solid #FDCD58':''}} onClick={() => setColor(false)} />  
                }
                <img src={require("./img/사형소년.jpg")} alt='toon' className='toonImg' />
                <img src={require("./img/싸움독학.jpg")} alt='toon' className='toonImg'/>
                <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
              </div>
              <div className='box-row'>
                <img src={require("./img/여신강림.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/연애혁명.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/재벌집막내아들.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/참교육.jpg")}  alt='toon' className='toonImg'/>
              </div>
              <div className='box-row'>
                <img src={require("./img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
              </div>
              <div className='box-row'>
                <img src={require("./img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
                <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
              </div>
              <Modal show={show} onClose={() => setShow(false)} onColor={() => setColor(true)} />    
        
            </div>
          <Button />
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;