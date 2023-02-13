import React, { useState } from 'react';
import './TrunPageButton.css'
import { useLocation, useNavigate } from 'react-router-dom'
import ApiService from '../../ApiService';


const Button = ({imagesrc, monArrTest}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const goNextPage = () => {

        let synopsis = []
        monArrTest.map((objList) => {
            objList.map((obj) => {
                imagesrc.map((src) => {
                    if(obj.img == src){
                        synopsis.push(obj.num)
                    }
                })
            })
        })

        let genre = location.state.genre;
        let drawingStyle = location.state.drawingStyle;

        console.log(synopsis)
        console.log(genre)
        console.log(drawingStyle)

        let sendValue = [{genre}, {drawingStyle},{synopsis}]

        navigate('/resultTag', {state:{sendValue : {sendValue}}})
    }

    return (
        <div className='turn_btn_box' >
            <img src={require("../drawingStyle/img/Prev2.png")} className="btn_prev" onClick={() => navigate('/drawingStyle')} />
            <img src={require("../drawingStyle/img/Next2.png")} className="btn_next" onClick={() => goNextPage()}/>

            <div className='circle'>
                <img style={{ marginTop: '-5.8vh'}} 
                src={require("../drawingStyle/img/3page.png")} />
            </div>
        </div>
    );
}

export default Button;
