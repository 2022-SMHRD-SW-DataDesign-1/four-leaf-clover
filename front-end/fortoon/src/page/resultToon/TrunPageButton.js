import React from 'react';
import './css/TrunPageButton.css'


const Button = () => {
    return (
        <div className='turn_btn_box' >
            <img src={require("../drawingStyle/img/Prev.png")} className="btn_prev"/>
            <img src={require("../drawingStyle/img/Next.png")} className="btn_next"/>

        </div>
    );
}

export default Button;
