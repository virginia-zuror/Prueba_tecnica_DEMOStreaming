import './Movies.css';

import React, { useEffect, useState } from 'react';

import Button from '../ui/Button';
import Modal from '../ui/Modal';

const Movies = () => {
  const [all, setAll] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true);
  const [movies, setMovies] = useState([]);
  let filter = [];

  const [details, setDetails] = useState(false);
  const [clicked, setClicked] = useState(false);

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

  const [itemClicked, setItemClicked] = useState();
  let item;
  const handleClick = (clicked) => {
    setClicked(true);
    setDetails(true);
    item = clicked.parentNode.className;
  };

  useEffect(() => {
    getAll();
  }, [movies]);

  return (
    <div>
      <div className="title_movies">
        <h3>Popular Movies</h3>
      </div>
      <div className="content_movies">
        {error ? (
          <h2>Oops! Something went wrong...</h2>
        ) : !loaded ? (
          <h2>Loading...</h2>
        ) : (
          movies.map((movie, index) => (
            <figure key={index} className={index}>
              <img src={movie.images['Poster Art'].url} alt={movie.title} />
              <Button
                action={(e) => {
                  handleClick(e.target);
                  setItemClicked(movies[item]);
                }}
                text={movie.title}
                fontcolor="black"
              ></Button>
              {details && clicked && (
                <Modal
                  action={() => setDetails(false)}
                  content={
                    <div className="modal_content">
                      <h1>{itemClicked.title}</h1>
                      <p>{itemClicked.description}</p>
                      <p>{itemClicked.releaseYear}</p>
                      <img
                        src={itemClicked.images['Poster Art'].url}
                        alt={itemClicked.title}
                        className="image_modal"
                      />
                    </div>
                  }
                />
              )}
            </figure>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
