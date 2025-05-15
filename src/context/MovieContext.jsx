// src/context/MovieContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [castMembers, setCastMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper to fetch from Salesforce REST API
  const fetchFromSF = async (soql) => {
    const url = `https://null-3f-dev-ed.develop.my.salesforce.com/services/data/v59.0/query?q=${encodeURIComponent(soql)}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_SESSION_TOKEN}` }
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json[0]?.message || res.statusText);
    return json.records;
  };

  useEffect(() => {
    (async () => {
      try {
        const moviesSoql = `SELECT Id, Movie__c, Title__c, Release_Date__c, Genres__c, Overview__c, Popularity__c, Vote_Average__c, Vote_Count__c, Backdrop_Image__c, Poster_Path__c, Language__c, Adult__c FROM Movie__c`;
        const moviesData = await fetchFromSF(moviesSoql);

        const castSoql = `SELECT Id, Actor_ID__c, Cast_ID__c, Actor_Name__c, Character__c, Gender__c, Known_For__c, Profile_Image__c, Movie__c FROM Cast_Member__c`;
        const castData = await fetchFromSF(castSoql);

        setMovies(moviesData);
        setCastMembers(castData);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, castMembers, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};
