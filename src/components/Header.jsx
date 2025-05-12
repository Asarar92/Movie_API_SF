import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import TMDBlogo from '../assets/TMDBlogo.svg';

export default function Header({ setQuery }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
        </div>

        {isHomePage && (
          <div className="search-bar-container-header">
            <SearchBar setQuery={setQuery} />
          </div>
        )}
      </div>
    </header>
  );
}