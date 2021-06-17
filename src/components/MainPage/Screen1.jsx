import React from "react";
import styles from "./MainPage.module.css";
import img1 from "../../assets/images/gallery/6.jpg";
import Fade from "react-reveal/Fade";

const Screen1 = () => {
  return (
   
      
      <div className={styles.screen1}>
          
        <div className={styles.imgBox}>
          <div className={styles.text}>
            <h1>It is only the beginning...</h1>
          </div>
        <Fade right >  <img src={img1} alt="" /></Fade>
        </div>
      </div>
    
  );
};

export default Screen1;
