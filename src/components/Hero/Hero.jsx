import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Hero.module.css'



const Hero = () => {

  return (

    <div  id="page-wrap" className={styles.hero}>
      <Navbar/>
      <div className={styles.box}>
        <h1>NK Production House</h1>
      </div>
    </div>
  )
}

export default Hero
