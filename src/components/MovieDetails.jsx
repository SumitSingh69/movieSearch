import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieDetails({ movie }) {
  const navigate = useNavigate();

  if (!movie)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 text-gray-600 text-xl">
        No movie selected. Kindly select one first.
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg object-cover shadow"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{movie.Title}</h1>
            <p className="text-lg text-gray-600 mb-1">📅 Year: {movie.Year}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-4 self-start bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
