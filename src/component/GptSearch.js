import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {LOGO} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={LOGO} alt="login background"/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
