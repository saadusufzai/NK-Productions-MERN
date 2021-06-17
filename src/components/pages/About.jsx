import React from "react";
import styles from "./About.module.css";
import Navbar from "../Navbar/Navbar";
import Fade from 'react-reveal/Fade'
import nabeel from '../../assets/images/nabeel.jpg';
import Pulse from 'react-reveal/Pulse';

const About = () => {
  return (
    <>
     <Fade>
      <div className={styles.about}> 
      <Navbar />

      <Fade bottom>
     <div className={styles.bgBox}>
         <img src={nabeel} alt="nabeel khan Nk Production Australia"/>
      <div className={styles.bgText}>
      <Pulse delay='500'>
      <h1>Nabeel Khan</h1>
        </Pulse>
        <p>
          I haven’t swashbuckled with pirates, nor have I swam the English
          Channel. I haven’t even been to Antarctica. But I have travelled to
          many far away places, created a lot of still and moving pictures for
          myself and others. And I’ve made it my life’s goal to be as creative
          as possible towards everything I endeavor.
        </p>
        <p>
          On a deserted island, I’d go insane without photography, film, music,
          my wife Kate and our family pets. Storytelling, creative innovation,
          and visual voodoo – no matter the medium – make my heart go thump
          thump; and sharing all this online with the world, plus as much of my
          professional experience I can muster, makes my soul sing. I’m fond of
          crows, and love that they’ll fly toward anything shiny. I can find
          humor in anything.
        </p>
        <p>
      
          have won a boatload of awards for my work, and I’m grateful for every
          single one of them, but I’ve always been unsure of whether I earned
          them or whether the jury was rigged. I was transparent long before it
          was hip to be so, and I believe deeply in teamwork, community, and
          collaboration. Let’s be friends. Better yet, let’s swim the English
          Channel.
        </p>
      </div>

     </div>
     </Fade>
      </div>
      </Fade>
    </>
  );
};

export default About;
