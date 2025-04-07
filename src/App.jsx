import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import MovieSearch from './components/MovieSearch'
import SearchHistory from './components/SearchHistory'
function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() =>{
    console.log(searchHistory);
  },[searchHistory])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieSearch setSelectedMovie={setSelectedMovie} searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>} />
        <Route path="/details" element={<MovieDetails movie={selectedMovie}/>} />
        <Route path="/history" element={<SearchHistory searchHistory={searchHistory}/>} />
      </Routes>
    </Router>
  )
}

export default App