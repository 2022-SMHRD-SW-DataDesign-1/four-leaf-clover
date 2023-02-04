import React from 'react'

const Locker = () => {
  return (
    <>
        <div>
          {/* style={{width:'100%', height:'500px', border:'1px solid #003458'}} */}
            <div className="left" style={{width:'30%',height:'500px', float:'left', boxSizing:'border-box', backgroundColor:'#8977ad'}}>
              <h1> 내 보관함 </h1>
            </div>
            {/* <div className="right" style={{width:'70%',height:'500px', float:'right', boxSizing:'border-box', backgroundColor:'#ece6cc'}}>오른쪽</div> */}
        </div>
    </>
  )
}

export default Locker;