import React from 'react'
import Media from '../Gallery/Media'
import Navbar from '../Navbar/Navbar'
import styles from './Gallery.module.css'
import Fade from 'react-reveal/Fade'

const Gallery = () => {
    return (
        <Fade>
        <div className={styles.gallery}>
            <Navbar/>
            <Media/>
        </div>
        </Fade>
    )
}

export default Gallery
