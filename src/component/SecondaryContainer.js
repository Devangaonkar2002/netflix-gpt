import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector( (store) => store.movies)
  //if my movie list is empty, return null
  if (!movies?.nowPlayingMovies) return null;
  if (!movies?.popularMovies) return null;
  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer
