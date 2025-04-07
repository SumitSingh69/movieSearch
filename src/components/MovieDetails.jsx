import React from 'react'
import {useNavigate} from 'react-router-dom'
function MovieDetails({movie}) {
    console.log(movie)
    const navigate = useNavigate();
    if(!movie) return <p>No movies were selected . Kindly select one first</p>;
  return (
    <div>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt="{movie.Title}" />
        <p>year : {movie.Year}</p>
        <p>Plot : {movie.Plot}</p>
        <button onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default MovieDetails