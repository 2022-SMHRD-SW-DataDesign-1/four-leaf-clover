import React from 'react';
import './TurnPageButton.css'
import { useNavigate } from 'react-router-dom'


const TurnPageButton = () => {

    const navigate = useNavigate();

    return (
        <div className='turn_btn_box' >
            {/* <img src={require("../drawingStyle/img/Prev2.png")} className="btn_prev"/> */}
            <img src={require("../drawingStyle/img/Next2.png")} className="btn_next" onClick={() => navigate('/drawingStyle')}/>

            <div className='circle'>
                <img src={require("../drawingStyle/img/2page2.png")} />
            </div>
        </div>
    );
}

export default TurnPageButton;
