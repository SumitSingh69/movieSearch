import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const API_KEY = 'a21ecc83'
function MovieSearch({setSelectedMovie, searchHistory, setSearchHistory}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const handleSearch = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=a21ecc83&s=${query}
`);
        setResults(res.data.Search || []);
        console.log(results)
        


        
    };
    const handleMovieClick = async (movie) => {
        // const res = await axios.get(`http://www.omdbapi.com/?apikey=a21ecc83&s=${imdbID}`);
        setSelectedMovie(movie);
        // console.log(res.data)
        navigate('/details');
        const newEntry = {
            title: movie.Title,
            time: new Date().toLocaleString()
        };
        setSearchHistory([...searchHistory, {...newEntry}]);
    };
  return (
    <div>
        <h1 className='font-bold text-2xl'>Search Movies</h1>
        <input className='border-2 py-3 px-3 rounded-full' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {results.map(movie => (
                <li key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
                    {movie.Title} ({movie.Year})
                </li>
            ))}
        </ul>
        <button onClick={() => navigate('/history')}>View Search History</button>
    </div>
  )
}

export default MovieSearch