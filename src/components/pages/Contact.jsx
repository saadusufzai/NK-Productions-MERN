import React from 'react'
import styles from './Contact.module.css'
import ContactForm from '../Contact/ContactForm'
import Navbar from '../Navbar/Navbar'
import Fade from 'react-reveal/Fade'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Navbar/>
            <Fade>
                <ContactForm/>
            </Fade>
        </div>
    )
}

export default Contact
