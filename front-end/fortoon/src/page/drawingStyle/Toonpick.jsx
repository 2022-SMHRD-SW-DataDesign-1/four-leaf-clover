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
                <img src={require("./img/마루는_강쥐.jpg")} style={{border:color ? '5px solid #FDCD58':''}} onClick={() => setShow(true)} alt='toon' className='toonImg' />
                <img src={require("./img/사형소년.jpg")} style={{border:color ? '7px solid #FDCD58':''}} onClick={() => setShow(true)} alt='toon' className='toonImg' />
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
                
              </div>
              {
                !color ? 
                <Modal show={show} onClose={() => setShow(false)} onColor={() => setColor(true)} />    
                : <button onClick={()=> setColor(false)}> 선택해제 </button>    
              }
              
            </div>
          <Button />
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;