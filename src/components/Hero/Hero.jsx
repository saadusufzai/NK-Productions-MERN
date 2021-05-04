import React from 'react'
import Header from '../Header/Header'
import styles from './Hero.module.css'

const Hero = () => {
    return (
      <div className={styles.hero}>
        <Header/>
        <div className={styles.box}>
          <h1>NK Production House</h1>
        </div>
  
      </div>
    )
  }
  
  export default Hero
