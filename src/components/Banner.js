import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requestes from '../requestes';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requestes.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    };
    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner-contents'>
        <h1>{movie?.title || movie?.name || movie.original_name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        {/* {description} */}
        <h2 className='banner-description'>{movie?.overview}</h2>
      </div>
    </header>
  );
};

export default Banner;
