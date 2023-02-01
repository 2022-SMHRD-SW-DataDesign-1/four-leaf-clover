import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './ImgModal';


const Toonpick = styled.div`

  margin : 95px;

  h1 {
    margin: 0;
    text-align:center;
    font-size: 20px;
    color: #343a40;
  }
  .box{
    border: 0.5pt inset #9999;
    border-radius: 40px;
    margin: auto;
    margin-top:50px;
    display:fixed;
    justify-content: center;
    width: 750px;
  }
  
  .toonImg{
    box-shadow: 2px 5px 10px #999;
    border-radius: 40px;
    margin: 20px;
    display:absoluted;
    cursor: pointer;
  }
  .imgmodal{
    cursor: pointer;

  }

`;
function ToonChoice()  {
  const [ShowModal, SetModalIsOpen] = useState(false)
  const [ShowModal2, SetModalIsOpen2] = useState(false)
  const [ShowModal3, SetModalIsOpen3] = useState(false)

  const OpenModal =() => {
    SetModalIsOpen(prev => !prev)
  };

  return (
    <>
      <Toonpick>
        <div>
              <h1>좋아하는 그림체를 선택하세요</h1>
            <div className='box' >
              <img src={require("../img/마루는_강쥐.jpg")} onClick={OpenModal} alt='toon' className='toonImg' />
              <Modal ShowModal={ShowModal} SetModalIsOpen={SetModalIsOpen} />
                
              <img src={require("../img/사형소년.jpg")} onClick={OpenModal} alt='dog' className='toonImg' />
              <Modal ShowModal2={ShowModal2} SetModalIsOpen2={SetModalIsOpen2} />
              <img src={require("../img/싸움독학.jpg")} onClick={OpenModal} alt='toon' className='toonImg'/>
              <Modal ShowModal3={ShowModal3} SetModalIsOpen3={SetModalIsOpen3} />
              <img src={require("../img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/><br/>
              <img src={require("../img/여신강림.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("../img/연애혁명.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("../img/재벌집막내아들.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("../img/참교육.jpg")}  alt='toon' className='toonImg'/><br/>
              <img src={require("../img/하루만 네가 되고싶어.jpg")}  alt='toon' className='toonImg'/>
              <img src={require("../img/아홉수 우리들.jpg")}  alt='toon' className='toonImg'/>
            </div>
          
        </div>
      </Toonpick> 
    </>
  );
}


export default ToonChoice;