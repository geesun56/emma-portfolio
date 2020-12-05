import React from 'react';
import classes from './Introduction.module.css';

import Namecard from './Namecard/Namecard';
import Movies from './Movies/Movies';

const Introduction = () => {
    return (
        <div className={classes.intro_pane}>
            <Namecard/>
            <Movies/>
        </div>
    );

}

export default Introduction;