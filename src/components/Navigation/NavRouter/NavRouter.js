import React from 'react';
import classes from './NavRouter.module.css';
const NavRouter = () => {
    return (
        <div>
            <ul className={classes.Navlist}>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Services & Pricing</li>
                <li>Resume</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    );

}

export default NavRouter;