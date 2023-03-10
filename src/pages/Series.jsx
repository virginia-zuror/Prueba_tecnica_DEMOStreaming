import './Series.css';

import React, { useEffect, useState } from 'react';

const Series = () => {
  const [all, setAll] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [series, setSeries] = useState([]);

  const getAll = async () => {
    // eslint-disable-next-line prettier/prettier
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then((res) => res.json())
      .then((res) => setAll(res.entries));

    setLoaded(true);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <div className="title_series">
        <h3>Popular Series</h3>
      </div>
      <div className="content">
        {!loaded ? (
          <h3>Loading...</h3>
        ) : all.length > 0 ? (
          all.map((show) => {
            show.programType.includes('series') && <h3 key={show.title}>{show.title}</h3>;
          })
        ) : (
          <h3>Error...</h3>
        )}
      </div>
    </div>
  );
};

export default Series;
