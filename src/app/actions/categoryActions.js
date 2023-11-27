import axios from "axios"
import { ActionTypes } from "../reducers/actionTypes";



export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: {language: 'en'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDI0OGQxMWFhMDBkZGUzYjQ1ZDc4MzI3MTAyMTM3OCIsInN1YiI6IjY0ZjYxNTIyOGUyMGM1MDBjNTk1MWVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-5HCjzOVaCHgSvcDxcG0B6v5_hjM7C9OZ6rxLPK9Pk'
  }
};



export const getGenres=()=>async(dispatch)=>{
    const res= await axios.request(options)
  
  
  return dispatch({type:ActionTypes.GET_GENRES,
    payload:res.data.genres
})



}