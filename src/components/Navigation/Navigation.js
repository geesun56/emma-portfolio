import React from 'react';
import Nametag from './Nametag/Nametag'
import NavRouter from './NavRouter/NavRouter'
import classes from './Navigation.module.css';

const Navbar = () => {

    return (
        <div className={classes.Fixed_bar}>
            <Nametag/>
            <NavRouter/>
        </div>
        
        );
}

export default Navbar;