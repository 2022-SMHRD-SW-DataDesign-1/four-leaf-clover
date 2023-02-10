import React, { useState } from 'react';
import './css/TrunPageButton.css'
import { useLocation, useNavigate } from 'react-router-dom';


const Button = ({drawingStyleOutput}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const goNextPage = () => {

        let output = []
        drawingStyleOutput.map((dso) => {
            dso.map((ds) => {
                if (ds.color !== "") {
                    output.push(ds.num)
                }
            })
        })

        navigate('/synopsis', {state:{genre: location.state.genre, drawingStyle: output}})
    }

    return (
        <div className='turn_btn_box' >
            <img src={require("./img/Prev2.png")} className="btn_prev" onClick={() => navigate('/genre')} />
            <img src={require("./img/Next2.png")} className="btn_next" onClick={() => goNextPage()} />

            <div className='circle'>
                <img src={require("./img/1page2.png")} />
            </div>
        </div>
    );
}

export default Button;
