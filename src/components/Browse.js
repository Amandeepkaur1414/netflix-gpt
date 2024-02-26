import React from 'react'
import Header from './Header';
import useNowPlayingHook from '../hooks/useNowPlayingMovies';
import MainContainer from './MainComponent/MainContainer';
import SecondryContainer from './SecondryComponent/SecondryContainer';

const Browse = () => {
  useNowPlayingHook();
  return (
    <div>
      <Header></Header>
      {/* {
         Main container
            -video background
            -Video title
        //Secondary conatiner
            -Movielist *n
            -cards * n
      } */}
      <MainContainer></MainContainer>
      <SecondryContainer></SecondryContainer>
    </div>
  )
}

export default Browse