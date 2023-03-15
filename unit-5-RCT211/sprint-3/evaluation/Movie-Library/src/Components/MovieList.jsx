import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/MovieReducer/action";
import {MovieCard} from "./MovieCard";

export const MovieList = () => {
  const dispatch=useDispatch()
  const movie= useSelector((store)=>{
    console.log(store)
    return store.movieReducer.movies});
  // console.log(movies)

  useEffect(()=>{
    dispatch(getMovies)
  },[])

  return <div data-testid="movie-list">
    
    {/* Map through movie array  */}
    {/* { movie.map((el)=>{
      return <MovieCard key={el.id} />
    })} */}
    
    </div>;
};
