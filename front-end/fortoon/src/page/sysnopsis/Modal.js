import React from "react";
import styles from "../drawingStyle/css/modal.module.css";


const Modal = ({ show, onClose, onChecked, setFlag,selectToon }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={() => onClose()}>
      <div className={styles.norm} style={{ border: '3px solid #C0C0C0', fontSize:'3%', backgroundColor:'white', width:'20vw', height:'20vh' ,flexDirection:'column' }}>
        <div style={{display:'flex',padding:'20px', float:'left'}}>
          <div style={{ fontSize:'32px' }}>{selectToon.title}</div>

          <div style={{ fontSize:'15px', marginLeft:'1rem', marginTop:'1rem'}}>{selectToon.author}</div>
        </div>
        <div>
        <div style={{display:'flex', margin:'25px', fontSize:'12px'}}>{selectToon.synopis}</div>
        </div>
        <img
          src={require('../drawingStyle/img/tooncheck.png')}
          alt="closebtn"
          onClick={() => { onClose(); onChecked(); setFlag();}}
          className={`${styles.btnClose} btn-close`} />
          
          
      </div>
    </div>
  );

};

export default Modal;
