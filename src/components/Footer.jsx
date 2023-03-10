import './Footer.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return <div className='Footer'>
  <ul className='links_footer'>
    <li><NavLink>Home</NavLink></li>|
    <li><NavLink>Terms and Conditions</NavLink></li>|
    <li><NavLink>Privacy Policy</NavLink></li>|
    <li><NavLink>Collection Statement</NavLink></li>|
    <li><NavLink>Help</NavLink></li>|
    <li><NavLink>Manage Account</NavLink></li>
  </ul>
    <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
    <div className='btns_footer'>
        <span className='social'>
                <svg xmlns="http://www.w3.org/2000/svg" height="38" width="38" viewBox="0 0 166.1 299"><path fill="#FFF" d="M166.1 52h-47.4c-5.6 0-11.9 7.4-11.9 17.2v34.3h59.3v48.8h-59.3V299h-56V152.3H0v-48.8h50.8V74.7C50.8 33.5 79.4 0 118.6 0H166v52z"/></svg>
        </span>
        <span className='stores'></span>
    </div>
    
  </div>
};

export default Footer;
