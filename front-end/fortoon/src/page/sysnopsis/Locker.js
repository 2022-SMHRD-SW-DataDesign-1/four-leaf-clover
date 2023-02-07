import React, { useEffect, useState } from 'react'
import './style.css';

// import '../sysnopsis/img/나쁜 마법사의 꿈.jpg'  <= 이렇게 써야함  


// './img/나쁜 마법사의 꿈.jpg'  <= 불러온값




const Locker = ({ imagesrc }) => {

  const [src, setSrc] = useState('../')

  console.log(imagesrc)


  const [imgCode, setImgCode] = useState()

  useEffect(() => {
    setSrc(`../sysnopsis/img/${imagesrc}`)
  }, [imagesrc])

  // useEffect(() => {
  //   if (src == '../sysnopsis/img/undefined' || src==''){
  //     console.log('if 문 안')
  //     setImgCode(<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"></img>)
  //   } else {
  //     console.log('else 문 안')
  //     const requireCode= `require('${src}')`;
  //     console.log('::',requireCode)

  //     setImgCode(<img src={requireCode}></img>)      
  //     console.log(imgCode)
  //   }    

  // }, [src])


  // let srcCode = 'require("../sysnopsis/img/나쁜 마법사의 꿈.jpg").default'



  return (
    <>
      <div>
        <div className="left"
          style={{
            fontFamily: 'Cafe24Ssurround',
            width: '20%', height: '500px',
            float: 'left',
            boxSizing: 'border-box',
            border:'2px solid gray',
            borderRadius:'5%',
            marginLeft: '20px'
            //backgroundColor: 'pink'
          }}>
          <h1 style={{ fontSize: '25px' }}> 📁 내 보관함 </h1>
          <div style={{width:'10px', }}>
            {
              src == '../sysnopsis/img/undefined' || src == '' || imagesrc == undefined

                ? <img style={{width:'30%', float:'left'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"></img>
                :
                <img 
                style={{width:'100px', 
                borderRadius:'10%', 
                marginLeft:'30px',
                marginTop:'10px',
                boxShadow: '2px 3px 2px #dcdcdc'}} 
              src={require(`../sysnopsis/img/${imagesrc}`)}></img>

            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Locker;