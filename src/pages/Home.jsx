import './Home.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="title_home">
        <h3>Popular Titles</h3>
      </div>
      <div className="content">
        <figure className="series">
          <NavLink to="series">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1678468856/Icons/Black-and-White-Movie-Icon1_whdnwq.jpg"
              alt="link to series"
            />
            <p>Popular Series</p>
          </NavLink>
        </figure>
        <figure className="movies">
          <NavLink to="movies">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1678468856/Icons/Black-and-White-Movie-Icon1_whdnwq.jpg"
              alt="link to movies"
            />
            <p>Popular movies</p>
          </NavLink>
        </figure>
      </div>
    </div>
  );
};

export default Home;
