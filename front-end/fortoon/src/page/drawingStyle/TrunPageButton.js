import React from 'react';
import './css/TrunPageButton.css'


const Button = () => {
    return (
        <div className='turn_btn_box' >
            <img src={require("./img/Prev.png")} className="btn_prev"/>
            <img src={require("./img/Next.png")} className="btn_next"/>

            <div className='circle'>
                <img src={require("./img/1page.png")} />
                {/* <img src={require("./img/2page.png")} />
                <img src={require("./img/3page.png")} /> */}


            </div>
        </div>
    );
}

export default Button;
