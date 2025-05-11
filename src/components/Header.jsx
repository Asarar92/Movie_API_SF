import React from 'react';
import SearchBar from './SearchBar';
import TMDBlogo from '../assets/TMDBlogo.svg'; 


export default function Header({ setQuery }) {
  return (
    <header className="header-container">
     <div className="header-content">
  <div className="left-section">
    <a className="logo" href="/" aria-label="Home">
      <img
        src={TMDBlogo}
        alt="The Movie Database (TMDB)"
        width="154"
        height="20"
      />
    </a>

    <nav className="nav-links">
      <span>Movies</span>
      <span>TV Shows</span>
      <span>People</span>
      <span>More</span>
    </nav>
  </div>

  <div className="search-bar-container-header">
    <SearchBar setQuery={setQuery} />
  </div>
</div>
      
        
    </header>
  );
}
