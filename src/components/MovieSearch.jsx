import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = 'a21ecc83';

function MovieSearch({ setSelectedMovie, searchHistory, setSearchHistory }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    setResults(res.data.Search || []);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    navigate('/details');
    const newEntry = {
      title: movie.Title,
      time: new Date().toLocaleString(),
    };
    setSearchHistory([...searchHistory, newEntry]);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-6 py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">🎬 Movie Search</h1>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="border border-gray-300 px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition duration-200"
        >
          Search
        </button>
        <button
          onClick={() => navigate('/history')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition duration-200"
        >
          View History
        </button>
      </div>

      <ul className="w-full max-w-xl mt-6 space-y-3">
        {results.map((movie) => (
          <li
            key={movie.imdbID}
            onClick={() => handleMovieClick(movie)}
            className="cursor-pointer bg-white px-5 py-3 shadow-md rounded-lg hover:bg-blue-50 transition"
          >
            <span className="font-medium">{movie.Title}</span> ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
