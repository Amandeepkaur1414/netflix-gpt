import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingHook = ()=>{

    const dispatch = useDispatch();
  const getNowPlayingMovie = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await(data.json());
    dispatch(addNowPlayingMovies( json.results));
  };
  useEffect(()=>{
    getNowPlayingMovie();
  },[])
}
export default useNowPlayingHook;