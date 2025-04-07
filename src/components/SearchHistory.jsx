import React from 'react'
import {useNavigate} from 'react-router-dom'
function SearchHistory({searchHistory}) {
    console.log(searchHistory)
    const navigate = useNavigate();
  return (
    <div>
        <h2>Search History</h2>
        <ul>
            {searchHistory.map((entry, index) => {
                <li key={index}>
                    {entry.time}
                </li>
            })}
        </ul>
        <button onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default SearchHistory