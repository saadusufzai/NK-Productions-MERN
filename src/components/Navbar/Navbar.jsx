import React from "react";
import styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>NK Production House</h2>
      </div>

      <ul className={styles.nav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="">Booking</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
