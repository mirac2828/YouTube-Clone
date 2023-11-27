
import { Splide, SplideSlide } from '@splidejs/react-splide'
import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import { options } from '../app/actions/categoryActions';
import { baseImgUrl } from './Hero';
import "../../src/main.css"
import { Link } from 'react-router-dom';



const MovieCategories = ({ title, fetchUrl }) => {
  const [films, setfilms] = useState([])



  useEffect(() => {
    axios.get(fetchUrl, options)
      .then((res) => setfilms(res.data.results))
  }, [])
  return (
    <div className='bg-dark text-light p-4'>
      <h1>{title} </h1>
      <Splide options={{
        autoWidth: true,
        pagination: false, gap: 10

      }}>
        {
          films?.map((film) => (
            <SplideSlide>
              <Link to={`/movie/${film.id}`} >
                <img className='image' src={`${baseImgUrl}${film?.poster_path}`} />
              </Link>
            </SplideSlide>))
        }


      </Splide>












    </div>
  )

}


export default (MovieCategories)