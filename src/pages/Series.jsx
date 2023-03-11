import './Series.css';

import React, { useEffect, useState } from 'react';

import Button from '../ui/Button';
import Modal from '../ui/Modal';

const Series = () => {
  const [all, setAll] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true);
  const [series, setSeries] = useState([]);
  let filter = [];
  const [details, setDetails] = useState(false);

  const getAll = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setAll(res.entries));

    setError(false);
    all.map((show) => show.programType.includes('series') && filter.push(show));
    const serieToPrint = filter.filter((show) => show.releaseYear >= 2010);
    serieToPrint.splice(20);

    /* setSeries(serieToPrint); */
    const copiedSeries = [...serieToPrint];
    const seriesSorted = copiedSeries.sort((a, b) => (a.title < b.title ? -1 : +1));
    setSeries(seriesSorted);

    setLoaded(true);
  };

  useEffect(() => {
    getAll();
  }, [series]);

  /*  const getSeries = () => {
    getAll();
    all.map((show) => show.programType.includes('series') && filter.push(show));

    setSeries(filter);
  }; */
  /* getAll(); */

  return (
    <div>
      <div className="title_series">
        <h3>Popular Series</h3>
      </div>
      <div className="content_series">
        {error ? (
          <h2>Oops! Something went wrong...</h2>
        ) : !loaded ? (
          <h2>Loading...</h2>
        ) : (
          series.map((serie) => (
            <figure key={serie.title}>
              <img src={serie.images['Poster Art'].url} alt={serie.title} />
              <Button
                action={() => {
                  setDetails(true);
                  console.log(serie.title);
                }}
                text={serie.title}
                fontcolor="black"
              ></Button>
              {details && (
                <Modal
                  action={() => setDetails(false)}
                  content={
                    <div className="modal_content">
                      <h3>{serie.title}</h3>
                      <p>{serie.description}</p>
                      <p>{serie.releaseYear}</p>
                      <img
                        className="image_modal"
                        src={serie.images['Poster Art'].url}
                        alt={serie.title}
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

export default Series;
