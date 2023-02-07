import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
    async function deleteMovieHandler(id) {
      console.log(id);
      const response =await fetch(`https://reacthttp-37efe-default-rtdb.firebaseio.com/movies/${id}.json`,{
        method:'DELETE',
        
        headers : {
          'Content-Type' : 'application/json'
        }
      });
      const data = await response.json();
      //console.log(data);
    }
  
    
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={deleteMovieHandler.bind(null,movie.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
