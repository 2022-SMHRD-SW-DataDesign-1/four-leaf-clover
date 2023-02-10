import React from 'react';
import './css/TrunPageButton.css'

const Button = ({slideLeft, slideRight}) => {

    return (
        <div className='turn_btn_box' >
            <img src={require("../drawingStyle/img/Prev2.png")} className="btn_prev" onClick={() => slideLeft()} />
            <img src={require("../drawingStyle/img/Next2.png")} className="btn_next" onClick={() => slideRight()} />
        </div>
    );
}

export default Button;
