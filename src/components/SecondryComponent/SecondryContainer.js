import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies &&(
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Popular Movies"} movies={movies.nowPopularMovies}/>
       <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>
       
    </div>)
  )
}

export default SecondryContainer