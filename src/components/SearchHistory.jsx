import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchHistory({ searchHistory }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📜 Search History</h2>

      {searchHistory.length === 0 ? (
        <p className="text-gray-600 text-lg">No history found. Search something first!</p>
      ) : (
        <ul className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 space-y-2">
          {searchHistory.map((entry, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b last:border-b-0 py-2 px-3 rounded hover:bg-gray-50"
            >
              <span className="font-medium text-gray-700">{entry.title}</span>
              <span className="text-sm text-gray-500">{entry.time}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        ⬅ Back to Search
      </button>
    </div>
  );
}

export default SearchHistory;
