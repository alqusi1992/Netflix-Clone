import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './RowStyle.css';
const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
