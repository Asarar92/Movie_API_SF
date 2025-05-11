

import React from 'react'
import SearchBar from './SearchBar'

const Header = ({setQuery}) => {
  return (
    <div className='header-container'>
      <div className='header-content'>
      <h2>IMDB</h2>
      <SearchBar setQuery={setQuery}/>
      </div>
    </div>
  )
}

export default Header
