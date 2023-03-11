import './Movies.css';

import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [all, setAll] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true); //seteo un estado de error para poder iniciar el useEffect y controlar el fallo del fetch al pintado de los datos
  const [movies, setMovies] = useState([]);
  let filter = [];

  const getAll = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setAll(res.entries));

    setError(false);
    all.map((show) => show.programType.includes('movie') && filter.push(show));
    const movieToPrint = filter.filter((show) => show.releaseYear >= 2010);
    movieToPrint.splice(20);
    /* setMovies(movieToPrint); */
    const copiedMovies = [...movieToPrint];
    const moviesSorted = copiedMovies.sort((a, b) => (a.title < b.title ? -1 : +1));
    setMovies(moviesSorted);
    setLoaded(true);
  };
  useEffect(() => {
    getAll();
  }, [error]);

  return (
    <div>
      <div className="title_movies">
        <h3>Popular Movies</h3>
      </div>
      <div className="content_movies">
        {!loaded ? (
          <h2>Loading...</h2>
        ) : (
          movies.map((movie) => (
            <figure key={movie.title}>
              <h4>{movie.title}</h4>
              <img src={movie.images['Poster Art'].url} alt={movie.title} />
            </figure>
          ))
        )}
        {error && <h2>Oops! Something went wrong...😖</h2>}
      </div>
    </div>
  );
};

export default Movies;
