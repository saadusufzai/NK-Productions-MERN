import React from "react";
import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div styles={{backgroundColor: '#000'}} className={styles.header}>
      <div className={styles.logo}>
        <h2>NK Production House</h2>
      </div>

      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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

export default Navbar;
