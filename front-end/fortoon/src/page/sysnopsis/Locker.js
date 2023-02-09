import React, { useEffect, useState } from 'react'
import './style.css';

// import '../sysnopsis/img/나쁜 마법사의 꿈.jpg'  <= 이렇게 써야함  


// './img/나쁜 마법사의 꿈.jpg'  <= 불러온값




const Locker = ( {imagesrc} ) => {

  const [src, setSrc] = useState([])

  const [imgCode, setImgCode] = useState()

  useEffect(() => {
    // console.log(imagesrc)
    if (imagesrc != undefined)
      setSrc(imagesrc)      
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
            width: '20%', height: '578px',
            float: 'left',
            boxSizing: 'border-box',
            border:'2px solid gainsboro',
            borderRadius:'5%',
            marginLeft: '78px'
            
            //backgroundColor: 'pink'
          }}>
          <h1 style={{ fontSize: '25px' }}> 📁 내 보관함 </h1>
          <div style={{width:'10px',display: 'inline' }}>
            <div className='box2'>
              {
                (src == './img/undefned' || src == '')
                ? <img style={{width:'30%', float:'left'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"></img>
                :
                src.map( (srcurl, idx) => {
                  // console.log(srcurl)
                  return(
                    
                      <img
                        style={{
                          width: '10vh',
                          borderRadius: '10%',
                          marginLeft: '1rem',
                          marginTop: '2vh',
                          boxShadow: '2px 3px 2px #dcdcdc',
                          display: 'flex-inline'

                        }}
                        // src={`${srcurl}`}
                        src='https://shared-comic.pstatic.net/thumb/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg'
                      >
                      </img>
                    
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locker;