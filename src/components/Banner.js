import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requestes from '../requestes';
import './BannerStyle.css';

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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

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
        <h1 className='banner-title'>{movie?.title || movie?.name || movie.original_name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        {/* {description} */}
        <h2 className='banner-description'>{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className='banner-fadeBottom' />
    </header>
  );
};

export default Banner;
