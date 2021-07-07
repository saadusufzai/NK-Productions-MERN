import React,{ useState} from "react";
import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'
const Navbar = () => {
  let [dropdown, setDropDown] = useState(false)
  let [burger,setBurger] = useState(false)
  return (
    <div  styles={{backgroundColor: '#000'}} className={styles.header}>
      <i onClick={()=>setBurger(!burger)} className="fa fa-bars fa-2x" aria-hidden="true"></i>
      <i onClick={()=>setBurger(false)} style={{display:`${burger? "block":"none"}`}}  className="fa fa-times" aria-hidden="true"></i>
      
      <div className={styles.logo}>
        <h2>NK Production House</h2>
      </div>

      <ul style={{transform:`${burger?"translateX(-30px)":"" }`}} className={styles.nav}>
        <li>
      
          <Link onClick={()=>setBurger(false)}  to="/">Home</Link>
        </li>
        <li className={styles.about}>
          <Link onClick={()=>setBurger(false)} onMouseOver={()=>setDropDown(true)}    to="/about">About</Link>
          <Link onClick={()=>setBurger(false)} onMouseOut={()=>setDropDown(false)}  style={{display:`${dropdown? 'block': 'none'}`}} className={styles.dropdown} to="/youtube">YouTube</Link>
          
        </li>
        <li>
          <Link onClick={()=>setBurger(false)} to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link onClick={()=>setBurger(false)} to="/booking">Booking</Link>
        </li>
        <li>
          <Link onClick={()=>setBurger(false)} to="/contact">Contact</Link>
        </li>
        <li>
        <Link onClick={()=>setBurger(false)} style={{display:`${burger? 'block': 'none'}`}}  className={styles.dropdown} to="/youtube">YouTube</Link>

        </li>
      </ul>

    </div>
  );
};

export default Navbar;
