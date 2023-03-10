import './Header.css';

import React from 'react';

import Button from '../ui/Button';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="title_header">DEMO Streaming</h1>
      <span className="btns_header">
        <Button variant="" text="Log in"></Button>
        <Button variant="contained" text="Start your free trial"></Button>
      </span>
    </div>
  );
};

export default Header;
