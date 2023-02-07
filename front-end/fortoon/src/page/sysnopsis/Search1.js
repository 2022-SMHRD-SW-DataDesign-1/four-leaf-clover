import React, { useEffect, useState } from "react";
import "./style.css";
import Tab from "./Tab";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Locker from './Locker';


const webToons = [
  {
    id: 1,
    text: "하루의 하루"
  },
  {
    id: 2,
    text: "참교육"
  },
  {
    id: 3,
    text: "마루의 강쥐"
  },
  {
    id: 4,
    text: "유미의 세포들"
  }
];

const Search1 = () => {
  const [search, setsearch] = useState("");
  const [imagesrc, setImagesrc] = useState();

  const onChange = (e) => {
    setsearch(e.target.value)
  }

  const filterTitle = webToons.filter((webToons) => {
    return webToons.text.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
  })

  const getImage = (img)=>{

    console.log('getImage img',img[0])
    setImagesrc(img[0].split('/')[2])
  }



  // 1. 화면 구현이 완료됐을때 
  // useEffect(()=>{},[])

  // 2. imageSrc가 변경되었을때
  // useEffect(()=>{
  //   console.log('Search1 imgsrc : ',imagesrc);
  // },[imagesrc])

  return (
    <div>
      <Locker imagesrc={imagesrc} />

      <div style={{ height: '60%', float:'right'}}>
        <div className="nav">
          <div className={search[webToons] ? "active" : "none"} /> 
          <input className='search' 
            style={{ 
              fontFamily: 'Cafe24SsurroundAir',
              width: '18%', 
              position:'relative',
              display:'flex',
              // float:'right'
               }} 
            type="text" 
            value={search} 
            onChange={onChange} 
            placeholder=" #태그 / 웹툰제목을 검색하세요. "/>
          <div className="navContainer" >
            {filterTitle.map((title) => (
              <div key={title.id}>
                <span>{title.text}</span>
              </div>
            ))}
          </div>
        </div>
        <Tab setImagesrc={setImagesrc} getImage={getImage}/>
      </div>   
      
    </div>
    
  );
};

export default Search1;