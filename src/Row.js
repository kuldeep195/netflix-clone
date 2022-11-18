import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from "movie-trailer";



const base_url = "https://image.tmdb.org/t/p/original/";

function Row ({title,fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");
    //a snippet of code which runs based on a spa
    useEffect(()=>{
    
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results); 
        return request;
        //"https://api.themoviedb.org/3",
    }
    fetchData();

},[fetchUrl]);
// console.table(movies);    
 
const opts = {
  height: "390",
  width: "100%",
  playerVars:{
// https://developers.google.com/youtube/player_parameters
 autoplay:1,
  },
};
const handleClick = (movie) =>{
  if(trailerUrl){
    setTrailerUrl("");
  } else{
    movieTrailer(movie?.name||  movie.original_title || movie.title)
    .then((url)=>{
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    })
    .catch((error)=> console.log(error));
  }

  };



  return (
    <div className="row">
     <h2>{title}</h2>
      <div className="row_posters">
        {/* several row_posters */}
        {/* {console.log(movies)} */}
{movies.map((movie) =>(
    <img 
    onClick={() => handleClick(movie)}   
    key={movie.id}
    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
    src= {`${base_url}${isLargeRow? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;