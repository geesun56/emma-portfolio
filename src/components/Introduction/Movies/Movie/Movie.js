
import React from 'react';
import classes from './Movie.module.css';

const Movie = (props) => {
    return(
        <div className={classes.Movie} onClick={props.click}>
            <img className={classes.MoviePoster} src={props.poster}/>
            <p className={classes.MovieTitle}><strong>{props.title}</strong></p>
        </div>
    );
}

export default Movie;