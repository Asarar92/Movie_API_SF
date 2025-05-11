import React, { useState, useRef, useEffect } from 'react';

export default function SearchBar({ setQuery }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const containerRef = useRef();

  // Focus input when open
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
        setQuery(''); // optionally reset search when closed
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setQuery]);

  return (
    <div ref={containerRef} className={`search-container${open ? ' open' : ''}`}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle search"
        className="search-icon-btn"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      {open && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a movie..."
          onChange={e => setQuery(e.target.value.toLowerCase())}
          className="search-input"
        />
      )}
    </div>
  );
}
