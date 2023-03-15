import { GET_MOVIE_SUCCESS, MOVIE_FAILURE, MOVIE_REQUEST, POST_MOVIE_SUCCESS } from "./actionTypes";
import axios from "axios";
export const getMoviesSuccess = (payload) => {
  // Complete the getMovies logic here
  return {type:GET_MOVIE_SUCCESS,payload}
};

export const postMoviesSuccess = () => {
  // Complete the getMovies logic here
  return {type:POST_MOVIE_SUCCESS}
};

export const moviesRequest = () => {
  // Complete the getMovies logic here
  return {type:MOVIE_REQUEST}
};

export const MovieFailure = () => {
  // Complete the getMovies logic here
  return {type:MOVIE_FAILURE}
};

export const addMovies=(payload)=>(dispatch)=>{

  dispatch(moviesRequest());
  axios.post("http://localhost:8080/movies",payload)
  .then(()=>{
    dispatch(postMoviesSuccess())
  })
  .catch((err)=>{
    dispatch(MovieFailure())
  })

}

export const getMovies=(dispatch)=>{
  dispatch(moviesRequest())
  axios.get("http://localhost:8080/movies")
  .then((res)=>{
    dispatch(getMoviesSuccess(res.data))
  })
  .catch((err)=>{
    dispatch(MovieFailure())
  })
}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}