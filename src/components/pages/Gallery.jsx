import React from 'react'
import Media from '../Gallery/Media'
import Navbar from '../Navbar/Navbar'
import styles from './Gallery.module.css'

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <Navbar/>
            <Media/>
        </div>
    )
}

export default Gallery
