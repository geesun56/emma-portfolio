import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return(
        <div className={classes.Button} onClick={props.click}>
            {props.children} <p> {props.functionality}</p>
        </div>
        
    );
}

export default Button;