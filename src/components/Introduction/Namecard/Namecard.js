import React from 'react';
import classes from './Namecard.module.css';
import Button from '../../../UI/Button/Button';
import { TiDocumentText } from "react-icons/ti";
import {IoIosArrowDropright} from 'react-icons/io'

const parameter = {
    userName : 'Emma Watson',
    jobTitle : 'Actress/Model',
    facePhoto: 'https://static.wixstatic.com/media/ea883b_9f64e50b22fe47c4af0f50ed65e6729f~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/ea883b_9f64e50b22fe47c4af0f50ed65e6729f~mv2.jpg',
    intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem2 Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
}

const Namecard = (props) => {
    return (
        <div className={classes.Namecard}>
            <div className={classes.content}>
                <p style={{fontFamily:'Playfair Display', fontSize: '3vw', margin: '0', padding: '0'}}><strong>{parameter.userName}</strong></p>
                <p style={{fontFamily:'Playfair Display', fontSize: '1vw', padding: '0'}}>{parameter.jobTitle}</p>
                <p>{parameter.intro}</p>

                <div className={classes.NamecardButtons}>
                    <Button functionality = 'View Portfolio'><IoIosArrowDropright/></Button>
                    <Button functionality = 'View Resume' click = {props.click}><TiDocumentText/></Button>
                </div>
            </div>

            <img className={classes.facePhoto
            } src={parameter.facePhoto}/>
            
            
        </div>
    );
}

export default Namecard