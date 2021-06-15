import React from "react";
import styles from "./MainPage.module.css";

import cam1 from "../../assets/images/camera1.jpg";
import cam2 from "../../assets/images/camera2.jpg";
import cam3 from "../../assets/images/camera3.jpg";

const Screen3 = () => {
  return (
    <div className={styles.screen3}>
      <div className={styles.box}>
        <h1>Why Choose Us?</h1>
        <h3>We got the best equipment in town!</h3>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src={cam1} alt="camera1" />
          </div>
          <div className={styles.image}>
            <img src={cam2} alt="camera1" />
          </div>
          <div className={styles.image}>
            <img src={cam3} alt="camera1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
