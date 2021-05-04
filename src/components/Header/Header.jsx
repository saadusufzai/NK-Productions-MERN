import React from "react";
import  styles from './Header.module.css';

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>NK Photography</h2>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
