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
  const [clicked, setClicked] = useState(false);

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

  const [itemClicked, setItemClicked] = useState();
  let item;
  const handleClick = (clicked) => {
    setClicked(true);
    setDetails(true);
    item = clicked.parentNode.className;
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
          series.map((serie, index) => (
            <figure key={index} className={index}>
              <img src={serie.images['Poster Art'].url} alt={serie.title} />
              <Button
                action={(e) => {
                  handleClick(e.target);
                  setItemClicked(series[item]);
                }}
                text={serie.title}
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

export default Series;
