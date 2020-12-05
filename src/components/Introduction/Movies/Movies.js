import React from 'react';
import classes from './Movies.module.css';
import {GrMagic} from 'react-icons/gr';
import MovieGrid from './MovieGrid/MovieGrid';

const Movies =() => {
    return (
        <div className={classes.Movies}>
            <div className={classes.Title}>
                        <div className={classes.Title_bullet}></div>
                        <p style={{padding:0, margin: 0, fontSize: '4.3vh'}}><strong>What  I  do </strong></p>
                        <p style={{fontFamily:'Bitter', fontSize: '1vw'}}>I have more than 10 years' experience in the film industry starring numerous movies. Below is the list of movies that I participated throughout my career. 
                        You can navigate thorugh and get detailed information about my movies. Winggardium labiousa ! <GrMagic/> </p>
            </div>
            
            <MovieGrid/>
        </div>
    );
}

export default Movies;