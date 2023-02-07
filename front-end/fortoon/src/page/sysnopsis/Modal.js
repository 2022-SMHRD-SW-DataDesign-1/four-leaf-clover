import React from "react";
import styles from "../drawingStyle/css/modal.module.css";

const Modal = ({ show, onClose, onColor, onChecked }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={()=>onClose()}>
      <div className={styles.modal} style={{border:'3px solid #C0C0C0'}}>
        <div >synopsis</div>
        <img 
        src={require('../drawingStyle/img/tooncheck.png')} 
        alt="closebtn" 
        onClick={() => {onClose(); onColor(); onChecked();}} 
        className={`${styles.btnClose} btn-close`}/>
      </div>
    </div>
  );

};

export default Modal;
