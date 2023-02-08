import React from "react";
import styles from "./css/modal.module.css";

// const Thumb =[
//   {id: 1,img: "./img/마루는_강쥐.jpg"},
//   {id: 2,img: "./img/싸움독학.jpg"},
//   {id: 3,img: "./img/참교육.jpg"},
//   {id: 4,img: "./img/아홉수 우리들.jpg"}
// ]

// var returnValue = Thumb.find(function(data,index){
//   console.log(`${index}번째 index`);
//   return data.id === 2
// })

// console.log(returnValue);

const Modal = ({ show, onClose, onColor, onChoice1, onChoice2, imgList, setNewImgStyle }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWrapper} onClick={()=>onClose()}>
      <div className={styles.modal}>

        {/* 이미지에 맞은 썸네일 불러와야함  */}
        <img src={require("./img/마루는 강쥐_썸.jpg")} alt="bigimg" className={styles.modal}  />
        

        <img src={require("./img/tooncheck.png")} alt="closebtn" 
          onClick={() => {
          onClose(); 
          let list = imgList;
          list[onChoice1].imgs[onChoice2].color="6px solid #FDCD58"
          setNewImgStyle(list.map((data)=> {return(data)}));
          }} 
          className={`${styles.btnClose} btn-close`}/>
      </div>
    </div>
  );

};

export default Modal;
