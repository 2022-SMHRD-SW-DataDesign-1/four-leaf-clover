import React, { useEffect, useState } from "react";
import ApiService from "../../ApiService";
import styles from "./css/modal.module.css";

const Modal = ({ show, onClose, onChoice1, onChoice2, imgList, setNewImgStyle }) => {

  const [localImage, setLocalImage] = useState('')

  if(imgList.length != 0) {
    // console.log(imgList[onChoice1][onChoice2].path)
    ApiService.modalImageLoad(imgList[onChoice1][onChoice2].path)
    .then((res) => {
      setLocalImage(res.data)
    })
    .catch((err) => {
      console.log("Modal axios 에러", err)
    })
  }

  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={()=>onClose()}>
      <div className={styles.modal}>

        {/* 이미지에 맞은 썸네일 불러와야함  */}
        <img src={`data:image/;base64,${localImage}`} alt="bigimg" className={styles.modal} style={{width:"20vw", height:"60vh"}} />

        <img src={require("./img/tooncheck.png")} alt="closebtn" 
          onClick={() => {
            onClose(); 
            let list = imgList;
            list[onChoice1][onChoice2].color="6px solid #FDCD58"
            setNewImgStyle(list.map((data)=> {return(data)}));
          }} 
          className={`${styles.btnClose} btn-close`}/>
      </div>
    </div>
  );

};

export default Modal;
