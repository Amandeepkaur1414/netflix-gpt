import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';

const usePopulaeMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovie = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
      const json = await(data.json());
      dispatch(addPopularMovies( json.results));
    };
    useEffect(()=>{
        getPopularMovie();
    },[])
}

export default usePopulaeMovies