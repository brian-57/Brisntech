import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our Cutting edge curriculum is designed to empower students with knowledge ,skils and experience needed to excel in this dynamic world</p>
            <button className='btn'>Explore More <img src={dark_arrow}alt="" /></button>
        </div>
    </div>
  )
}
export default Hero
