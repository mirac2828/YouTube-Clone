import React from 'react'
import { useSelector } from 'react-redux'
import "../main.css"

import { Link } from 'react-router-dom'

export const baseImgUrl = "https://image.tmdb.org/t/p/original/"
const Hero = () => {
  const state = useSelector(state => state.movieState)
  const index = Math.round(Math.random() * 19)
  const film = state?.popularFilms[index]
  console.log(index)
  return (
    <div className='bg-dark   text-light px-5 d-flex align-item-center  '>

      <div className=' mx-1 col-md-6 d-flex flex-column  mb-3 justify-content-center gap-3 '>
        <h1>{film?.title} </h1>
        <p> <span style={{ color: "red" }} >IMDB:</span>{film?.vote_average} </p>
        <p> {film?.overview}  </p>
        <div className='d-flex gap-3 justify-content-center'>
          <Link className='btn btn-danger' to={`/movie/${film?.id}`} >Şimdi izle</Link>
          <button className='btn btn-info'> Listeye Ekle</button>
        </div>
      </div>
      <div className='col-md-6 d-flex align-item-center '>
        <img className='img-fluid rounded shadow '
          src={`${baseImgUrl}${film?.backdrop_path}`} />
      </div>


    </div>

  )
}

export default (Hero)