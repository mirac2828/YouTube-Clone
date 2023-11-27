import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseImgUrl } from '../components/Hero';
import "../../src/main.css"


const MovieDetail = () => {
  const {movieId}=useParams()
  const[detail,setDetail]=useState()
  const navigate=useNavigate()


 

useEffect(()=>{const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}`,
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDI0OGQxMWFhMDBkZGUzYjQ1ZDc4MzI3MTAyMTM3OCIsInN1YiI6IjY0ZjYxNTIyOGUyMGM1MDBjNTk1MWVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-5HCjzOVaCHgSvcDxcG0B6v5_hjM7C9OZ6rxLPK9Pk'
  }
};

axios
  .request(options)
  .then(function (response) {
   setDetail(response.data);
  })},[] )
  if(!detail) return "LOADİNG"
  
  
  return (
    <div className=' movie-detail bg-dark text-light d-flex align-items-center '>
      
      
    

      <div className='d-flex justify-content-center row align-items-center '>
      <h1 onClick={()=>{navigate("/")}} className='text-center detail-navigate'>Anasayfa'ya Dön</h1>
         <img  className="w-50 " src={`${baseImgUrl}/${detail?.poster_path}`}
      /></div>
      <div className=''>
        <h1>{detail?.title} </h1>
     
      <p className=''>{detail?.overview} </p> 
      <div className='row row-cols-2 p-4' >
        <div className='w-100'><p ><span className='bg-info rounded p-1 text-dark'>Maliyet:</span>  <span className='bg-warning text-dark rounded p-1'>{detail.budget}<span className='text-success'>$</span> </span> </p>  
        <p> <span className='bg-info rounded p-1 text-dark '>Hasılat:</span> <span className='bg-warning text-dark rounded p-1 '>{detail.revenue} <span className='text-success'>$</span> </span> </p>
        <p><span className='bg-info rounded p-1 text-dark'>Kazanç:</span> <span className='bg-warning text-dark rounded p-1'>{detail.revenue-detail.budget} <span className='text-success'>$</span> </span> </p>
        
        </div>
        </div>
        <div>
          
          <div className=' d-flex '>    
            DİLLER:&nbsp;&nbsp;{detail.spoken_languages.map((lang,index)=>(
              <div  key={index} > <p> {lang.name} ,</p>&nbsp;&nbsp;
              
</div>
            ))}


          </div>
          <div className=' d-flex ' > Kategori : &nbsp;{detail.genres.map((genre)=>(
            <p key={genre.id}> &nbsp;{genre.name},&nbsp;  </p>
             



          ) ) } </div>
          <div className=' d-flex gap-2  ' > Yapımcı:  &nbsp;{detail.production_companies.map((comp,index)=>(
            <p key={index}>{comp.name},&nbsp;&nbsp;  </p>
             



          ) ) } </div>

          


          </div>
          



      </div>
      
   
      
      
       </div>
  )
}

export default MovieDetail
