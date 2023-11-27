import { memo, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage"

import "./main.css"
import MovieDetail from "./pages/MovieDetail"

import { useDispatch, useSelector } from 'react-redux'
import Hero from './components/Hero'

import Header from './components/Header'
import { getData } from './app/actions/movieActions'
import { getGenres } from './app/actions/categoryActions'






function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
    dispatch(getGenres())
  }, [])
  const state = useSelector(state => state.movieState)

  if (!state) return "loading"

  return (
    <div>


      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/movie-detail" element={<Hero />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
