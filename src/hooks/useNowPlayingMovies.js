import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch= useDispatch();
  const nowPlayingMovies= useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies=async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
    const json= await data.json();
  
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(() => {
    //if nowPLayingmovies is empty then only call the api (memoization)
    if(!nowPlayingMovies) {
      getNowPlayingMovies();
    }
    
  }, []);
}

export default useNowPlayingMovies;