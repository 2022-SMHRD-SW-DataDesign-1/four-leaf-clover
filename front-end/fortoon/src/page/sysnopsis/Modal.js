import React from "react";
import styles from "../drawingStyle/css/modal.module.css";

const Modal = ({ show, onClose, onColor, onChecked }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={() => onClose()}>
      <div className={styles.norm} style={{ border: '3px solid #C0C0C0', fontSize:'3%', backgroundColor:'white', width:'20vw', height:'20vh' ,flexDirection:'column' }}>
        <div style={{display:'flex',padding:'20px', float:'left'}}>
          <div style={{ fontSize:'32px' }}>제목</div>

          <div style={{ fontSize:'15px', marginLeft:'1rem', marginTop:'1rem'}}>작가</div>
        </div>
        <div>
        <div style={{display:'flex', margin:'25px', fontSize:'12px'}}>평범한 중학생 '이대아', 집에서 도망치고 싶어 아무 기숙고등학교에 원서를 넣었다.
          그런데 알고 보니 이곳은 예술 고등학교로 위장한 마법학교였고,
          전혀 상관없는 곳인 줄 알았던 이 학교에서 ‘이대아’와 얽힌 비밀이 드러나기 시작한다!

          “나는 마법사인 척 모두를 속여 이 학교에 남아야 해. 무슨 방법을 써서라도."</div>
        </div>
        <img
          src={require('../drawingStyle/img/tooncheck.png')}
          alt="closebtn"
          onClick={() => { onClose(); onColor(); onChecked(); }}
          className={`${styles.btnClose} btn-close`} />
          
      </div>
    </div>
  );

};

export default Modal;
