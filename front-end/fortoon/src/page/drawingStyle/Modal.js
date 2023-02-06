import React from "react";
import styles from "./css/modal.module.css";

const Modal = ({ show, onClose, onColor }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <img src={require("./img/마루는 강쥐_썸.jpg")} alt="bigimg" className={styles.modal}  />
        <img src={require("./img/tooncheck.png")} alt="closebtn" onClick={() => {onClose(); onColor();}} className={`${styles.btnClose} btn-close`}/>
      </div>
    </div>
  );

};

export default Modal;
