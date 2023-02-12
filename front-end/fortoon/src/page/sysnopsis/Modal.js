import React from "react";
import styles from "../drawingStyle/css/modal.module.css";


const Modal = ({ show, onClose, onChecked, setFlag,selectToon }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={() => onClose()}>
      <div className={styles.norm} style={{ border: '3px solid #C0C0C0', fontSize:'3%', backgroundColor:'white', width:'50vw', height:'20vh' , display:'flex', flexDirection:'column' }}>
        <div style={{display:'flex',padding:'20px', paddingTop:'4vh', flexDirection:'column', float:'left'}}>
          <div style={{ fontSize:'50px' }}>{selectToon.title}</div>
          <div style={{ fontSize:'30px', marginLeft:'0.3rem', marginTop:'0.3rem'}}>{selectToon.author}</div>
        </div>
        <div>
          <div style={{display:'flex', alignItems:'center', margin:'25px', marginTop: '0px', fontSize:'20px'}}>{selectToon.synopis}</div>
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
