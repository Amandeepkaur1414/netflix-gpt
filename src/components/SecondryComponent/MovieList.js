import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  return (
    <div className='px-2 text-white overflow-hidden'>
        <div>
            <h1 className='text-3xl py-6'>{title}</h1>
        </div>
        <div  className='flex overflow-x-scroll'>
        <div className='flex'>
                { movies?.map((movie)=>(
                    <MovieCard key = {movie.id} posterpath ={movie.poster_path}/>
                ))
                }
        </div>
        </div>
        
      
    </div>
  )
}

export default MovieList