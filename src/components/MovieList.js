import React from 'react';
import TrackWatched from './TrackWatched'
import './movieList.module.css'

const MovieList = ({ onClick, item: { title, watched} }) => 
{
  return(
      <li>{title} <TrackWatched onClick={onClick} className={(watched) ? "watched" : "unwatched"} id={title}/></li>
  )
}

export default MovieList;
