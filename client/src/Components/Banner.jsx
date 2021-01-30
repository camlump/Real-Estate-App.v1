import React from 'react'

import banner from '../images/house1.jpg'

import '../StyleSheet/Banner.css'

const Banner = () => {
    return (
        <div className="Banner__container">
            <img src={banner} alt="Homepage banner"/>
        </div>
    )
}

export default Banner
