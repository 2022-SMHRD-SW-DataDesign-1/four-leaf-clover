import React, { useEffect, useState } from 'react'
import './style.css';


const Locker = ( {imagesrc, getOneimage} ) => {


  const [src, setSrc] = useState([])

  useEffect(() => {
    if (imagesrc != undefined)
      setSrc(imagesrc)      
  }, [imagesrc])

  const onChecked = (choiceImg)=>{
    // 부모 태그에 값을 넣어준다
    getOneimage(choiceImg)
  }
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

          }}>
          <h1 style={{ fontSize: '25px' }}> 선택한 웹툰 </h1>
          <div style={{width:'100%',display: 'inline-flex', textAlign:'center', overflow: 'auto' }}>
            <div className='box2'>
              {
                (src == './img/undefned' || src == '')
                ? <img style={{width:'30%', float:'left'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"></img>
                :
                src.map( (srcurl, idx) => {
                  return(
          
                    <>
                      <img
                        style={{
                          width: '10vh',
                          borderRadius: '10%',
                          margin: '1vh',
                          // marginLeft: '1rem',
                          // marginTop: '2vh',
                          boxShadow: '2px 3px 2px #dcdcdc',
                          display: 'inline-flex'
                        }}
                        onClick={()=>onChecked(srcurl)}
                        src={`${srcurl}`}
                      >
                      </img>
                      </>
                    
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