import React, { useState } from "react";
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


  const onChange = (e) => {
    setsearch(e.target.value)
  }

  const filterTitle = webToons.filter((webToons) => {
    return webToons.text.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
  })

  return (
    <div>
      <Header />
      <Locker />
      <div style={{ height: '60vh' }}>
        <div className="nav">
          <div className={search[webToons] ? "active" : "none"} /> 
          <input className='search' 
            style={{ width: '100%', position:'relative' }} type="text" value={search} onChange={onChange} />
          <div className="navContainer" >
            {filterTitle.map((title) => (
              <div key={title.id}>
                <span>{title.text}</span>
              </div>
            ))}
          </div>
        </div>
        <Tab />
      </div>
      <Footer />
    </div>
  );
};

export default Search1;