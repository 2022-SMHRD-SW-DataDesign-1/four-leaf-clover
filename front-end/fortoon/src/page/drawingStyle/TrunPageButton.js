import React from 'react';
import './css/TrunPageButton.css'
import { useNavigate } from 'react-router-dom';


const Button = () => {

    const navigate = useNavigate();

    return (
        <div className='turn_btn_box' >
            <img src={require("./img/Prev2.png")} className="btn_prev" onClick={() => navigate('/genre')} />
            <img src={require("./img/Next2.png")} className="btn_next" onClick={() => navigate('/synopsis')} />

            <div className='circle'>
                <img src={require("./img/1page2.png")} />
            </div>
        </div>
    );
}

export default Button;
