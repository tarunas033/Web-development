import { GET_MOVIE_SUCCESS, MOVIE_FAILURE, MOVIE_REQUEST, POST_MOVIE_SUCCESS } from "./actionTypes"


const initialState={
    isLoading: false,
    isError: false,
    movies: [],
  }



export const reducer=(state=initialState,{type,payload})=>{
    switch (type){
        case MOVIE_REQUEST:
            return {...state,isLoading:true}
        case MOVIE_FAILURE:
            return {...state,isLoading:false,isError:true}
        case GET_MOVIE_SUCCESS:
            return {...state,isLoading:false,movies:payload}
        case POST_MOVIE_SUCCESS:
            return {...state,isLoading:false}
        default:
            return {state}
  }
}