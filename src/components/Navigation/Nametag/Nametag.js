import React from 'react';
import classes from './Nametag.module.css';
import SocialLinks from './SocialLinks/SocialLinks';

const Nametag = () => {
    const userName = 'Emma Watson';
    const image_url = 'https://picfiles.alphacoders.com/308/308626.png';
    const message = "Hi my name is Emma Watson and I'm an actress/model based in UK. Welcome to my personal website!";
    return (<div className={classes.Nametag}>
        <p style={{fontFamily:'Playfair Display', fontSize: '1.5vw', padding: '0'}}>{userName}</p>
        <div className={classes.nametag_profile}><img src={image_url} alt="Profile"/></div>
        <p style={{padding:'0 1vw 0 1vw'}}>{message} </p>
        <SocialLinks/>
                </div>);

}

export default Nametag;