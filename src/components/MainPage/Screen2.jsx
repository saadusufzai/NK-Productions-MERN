import React from "react";
import styles from "./MainPage.module.css";
import img1 from "../../assets/images/gallery/10.jpeg";
import Fade from "react-reveal/Fade";


const Screen2 = () => {
  return (
    <div className={styles.screen2}>
      <div className={styles.imgBox}>
        <div className={styles.text}>
          <h1>Life passes by at such a pace...</h1>
          <h3> we sometimes forget to capture it.</h3>
        </div>
    <Fade left >    <img src={img1} alt="" /></Fade>
      </div>
    </div>
  );
};

export default Screen2;
