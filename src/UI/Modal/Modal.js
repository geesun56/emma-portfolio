import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop/Backdrop';

const Modal = (props) => {
    console.log(props.movieData)
    return (
        <div>
            <Backdrop/>
            <div className='modalContent'>
                <div onClick={props.click} className='close'></div>
                <img src={props.movieData.poster}></img>

                <div className='movieContent'>
                    <p style={{fontSize: '2.1vw', paddingTop: '0.3vh'}}><strong>{props.movieData.title}</strong></p>
                    <p><i>{props.movieData.date}</i></p>
                    <p>rate: {props.movieData.rate} / 10</p>
                    <p>{props.movieData.overview} </p>
                </div>
                

            </div>
        </div>
    )
}

export default Modal;