import React from 'react'
import './Hero.css'
import Dark_arrow from '../../assets/dark-arrow.png'


function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculam is design to empower students with the knowledge,skills and experiences need to excel in the dynamic feild of education.</p>
            <button className='btn'>Explore more <img src={Dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero