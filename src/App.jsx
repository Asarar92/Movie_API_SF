// App.jsx
import React, { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css' 


const App = () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <Header setQuery={setQuery} />
      <Outlet context={{ query }} />
    </div>
  )
}

export default App
