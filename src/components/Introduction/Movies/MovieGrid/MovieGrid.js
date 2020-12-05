import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import axios from 'axios';
import classes from './MovieGrid.module.css';
import Modal from '../../../../UI/Modal/Modal'

const APIKEY = '4fa8c1006b48c6ba2e0fe7bb7ec88252';
const baseURL = 'https://api.themoviedb.org/3/';
const personID = '10990';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const MovieGrid = () =>{
    const [movies, setMovies] = useState([]);
    const [ModalView, setModalView] = useState(false);
    const [ModalData, setModalData] = useState({});
    

    useEffect(() => {
        if(movies.length == 0){
            axios.get( 'https://api.themoviedb.org/3/person/10990/combined_credits?api_key=4fa8c1006b48c6ba2e0fe7bb7ec88252' )
            .then( response => {
                    const fetch_data = response.data.cast.slice(0, 22);
                    const movie_data = fetch_data.map( movie => {
                        return {
                            title: movie.title,
                            rate: movie.vote_average,
                            date: movie.release_date,
                            poster: imageURL+movie.poster_path,
                            overview: movie.overview 
                        }
                        
                    });
                    setMovies(movie_data);
                    console.log(movie_data);
                
                })
            .catch(error => {
            console.log(error);
                
            });
        }
    });
    
    
    const clickHandler = (index) => {
        if(ModalView){
            setModalView(false)
            setModalData({})
        }else{
            setModalData(movies[index])
            setModalView(true)
        }
    }

    const movie_elements = movies.map((movie, i) => 
        <Movie title = {movie.title}
            rate = {movie.rate}
            date = {movie.date}
            poster = {movie.poster}
            overview = {movie.overview}
            click = {() => clickHandler(i)}
            key = {'movie_'+i }
            />) 
    return(
        
        <div className={classes.MovieGrid}>
            
            {movie_elements}
            {ModalView ? <Modal click = {clickHandler} movieData = {ModalData}/> : null}
        </div>
    );
}

export default MovieGrid;
