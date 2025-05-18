import React, { useRef } from 'react'

import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const searchText= useRef(null);
  const dispatch= useDispatch();

  const searchMovieTMDB= async(movie) => {
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json= await data.json();
    return json.results;

  }
  const handleSearch = async() => {
    const gptQuery="Act like a movie recomendation system and suggest some movies for the query :" +searchText.current.value +"give only 5 movies separated by commas"
    const gptResults= await openai.chat.completions.create({
      
      model: 'gpt-4o',
      messages: [
        { role: 'developer', content: 'Talk like a pirate.' },
        { role: 'user', content: gptQuery },
      ],
    
    })
    
    const gptMovies=gptResults.choices?.[0]?.message?.content.split("");
    //it will give us a array of movies
    //for each movie we will search in tmdb
    const promiseArray= gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise] since the api will take some time to search for the movies so it will return a array of promise
    const tmdbResults= await Promise.all(promiseArray);
    //here we are resolving all the promises and push the result to redux store
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
    }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'
      onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' 
        className='p-4 m-4 col-span-9'
        placeholder='What do you want to watch?'/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleSearch}>
          Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
