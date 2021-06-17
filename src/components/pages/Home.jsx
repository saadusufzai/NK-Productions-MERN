import React from 'react'
import Footer from '../Footer/Footer'
import Media from '../Gallery/Media'

import Hero from '../Hero/Hero'
import Screen1 from '../MainPage/Screen1'
import Screen2 from '../MainPage/Screen2'
import Screen3 from '../MainPage/Screen3'


const Home = () => {
    return (
        <div>
           <Hero/>
            <Screen1/>
            <Screen2/>
            <Screen3/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home
