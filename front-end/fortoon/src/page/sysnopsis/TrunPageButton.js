import React from 'react';
import './TrunPageButton.css'


const Button = () => {
    return (
        <div className='turn_btn_box' >
            <img src={require("../drawingStyle/img/Prev2.png")} className="btn_prev"/>
            <img src={require("../drawingStyle/img/Next2.png")} className="btn_next"/>

            <div className='circle'>
                <img style={{ marginTop: '-5.8vh'}} 
                src={require("../drawingStyle/img/3page.png")} />
            </div>
        </div>
    );
}

export default Button;
