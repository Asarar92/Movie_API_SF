import React, { useState } from 'react'
import Header from './components/Header'
import MoviesCardList from "./components/MoviesCardList"


import './App.css'

const App = () => {
  const [query,setQuery] = useState('')
  return (
    <div>
        <Header setQuery={setQuery}/>
        <MoviesCardList query={query}/>
    </div>
  )
}

export default App