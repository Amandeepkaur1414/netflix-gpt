import React from 'react'
import Header from './Header';
import useNowPlayingHook from '../hooks/useNowPlayingMovies';
import MainContainer from './MainComponent/MainContainer';
import SecondryContainer from './SecondryComponent/SecondryContainer';
import usePopulaeMovies from '../hooks/usePopulaeMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingHook();
  usePopulaeMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div >
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondryContainer></SecondryContainer>
    </div>
  )
}

export default Browse