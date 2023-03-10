import './Header.css';

import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="title_header">DEMO Streaming</h1>
      <span className="btns_header">
        <button className='login'>Log in</button>
        <button>Start your free trial</button>
      </span>
    </div>
  );
};

export default Header;
