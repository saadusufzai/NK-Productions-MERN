import React,{ useState} from "react";
import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'
const Navbar = () => {
  let [dropdown, setDropDown] = useState(false)
  return (
    <div  styles={{backgroundColor: '#000'}} className={styles.header}>
      <div className={styles.logo}>
        <h2>NK Production House</h2>
      </div>

      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.about}>
          <Link onMouseOver={()=>setDropDown(true)}    to="/about">About</Link>
          <Link onMouseOut={()=>setDropDown(false)} style={{display:`${dropdown? 'block': 'none'}`}} className={styles.dropdown} to="/youtube">YouTube</Link>
          
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
