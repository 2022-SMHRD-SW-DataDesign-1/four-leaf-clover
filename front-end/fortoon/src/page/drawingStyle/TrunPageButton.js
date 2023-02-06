import React from 'react';
import './css/TrunPageButton.css'


const Button = () => {
    return (
        <div className='turn_btn_box' >
            <img src={require("./img/Prev2.png")} className="btn_prev"/>
            <img src={require("./img/Next2.png")} className="btn_next"/>

            <div className='circle'>
                <img src={require("./img/1page2.png")} />
            </div>
        </div>
    );
}

export default Button;
