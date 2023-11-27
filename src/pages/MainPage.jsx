import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../app/actions/movieActions"
import Hero from '../components/Hero'

import "../main.css"
import { getGenres } from '../app/actions/categoryActions'
import MovieCategories from '../components/MovieCategories'


const MainPage = () => {
  const state = useSelector(state => state.movieState)
  return (
    <div className=' kerem bg-dark h-100 w-100'>

      <Hero />
      {
        state.categories.slice(0, 5).map((genre) => (
          <MovieCategories
            key={genre.id}
            title={genre.name}
            fetchUrl={`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`} />

        ))}</div>
  )
}

export default (MainPage)