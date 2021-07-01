import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Fade from "react-reveal/Fade";
import styles from "./Youtube.module.css";

const Youtube = () => {
  let [videos, setVideos] = useState(["NmoB8Wlrujs", "bNGNwMS66Zc", "QHMEPbLTYqA", "xEOavHQVkEQ", "wCqorZ5PUW0", "7mdj1NCymJk", "yDxUfzZbgpE", "gB8ui8ZgLU8", "rBpdb_Gy1sY", "UJCVE-GJQoI", "7Hv9t3QOfsM", "-1y8RJU23hc", "nyUyq6_4NP4", "c6HvaMeCuYY", "FQNKLpCJ-H8", "GwBdEcGaaJo", "V3cHVArLkAQ", "Byxeauqlk-k", "NPKNbiaIhw0", "4q91docoFsM", "C7l_IUEDuH8", "2cSCndxMR7E", "iLD1LsvTIsw", "KtL7PfP8AC4", "I-ylIIbJlKQ", "wlgeITB0ziA", "DjMvHhQ49xs", "cyOKYKOla5I", "-iFhmNFLEH8"]);
  const url = process.env.REACT_APP_YTURL 
  console.log(url);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSSc3Gg8nfW7ue91aEqf4mVcYb9LbVbp8&channelId=UCogAeWI8NyZpCYjiErQZkcA&part=snippet,id&order=date&maxResults=100"
      )
      .then((res) => {
        setVideos(res.data.items.slice(1, -1).map((data) => data.id.videoId));
        console.log(res.data.items.slice(1, -1).map((data) => data.id.videoId));
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className={styles.youtube}>
      <Navbar />
      <Fade>
        <div className={styles.page}>
          <h1>Documentaries by NK</h1>
          <div className={styles.container}>
            {videos.map((data,key)=> 
            <div key={key}  className={styles.video}>
              <iframe
                 
                width="350"
                height="230"
                src={`https://www.youtube.com/embed/${data}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>)}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Youtube;
