import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Toonpick = styled.div`

  margin : 95px;

  h1 {
    margin: 0;
    text-align:center;
    font-size: 20px;    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box{
    border: 0.5pt inset #9999;
    border-radius: 40px;
    margin: auto;
    margin-top:50px;
    width:700px;
  }
  
  .toonImg{
    box-shadow: 2px 5px 10px #999;
    border-radius: 40px;
    margin: 20px;
    cursor: pointer;
    border-style: solid;
    // border-width: thick;
  }
`;


function ToonChoice()  {
  const [show, setShow] = React.useState(false);
  const [color, setColor] = useState(false);

  return (
    <>
      <Toonpick>
        <div>
              <h1 >좋아하는 그림체를 선택하세요</h1>
            <div className='box'>
              
              <img src={require("./img/마루는_강쥐.jpg")} style={{borderColor:color ? '#63CC63':'#F4FFFF' }} onClick={() => setShow(true)} alt='toon' className='toonImg' />
              <img src={require("./img/사형소년.jpg")} alt='toon' className='toonImg' />
              <img src={require("./img/싸움독학.jpg")} alt='toon' className='toonImg'/>
              <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/여신강림.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/연애혁명.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/재벌집막내아들.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/참교육.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("./img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
              {
                !color ? 
                <Modal show={show} onClose={() => setShow(false)} onColor={() => setColor(true)} />    
                : <button onClick={()=> setColor(false)}> 선택해제 </button>    
              }
              
            </div>
          
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;