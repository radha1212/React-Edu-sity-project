import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img'/>
            {/* <img src={play_icon} alt="" className='play_icon'/> */}
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Empark for a transformational educational journey with our university's comprehensive education programs.Our Cutting edge curriculam 
                is dedigned to empower students with knowledge,skills and experiences needed to exel in the dynamic field of education.</p>
            <p>with a focus of innovation,hands-on leaning and personalized mentorship,our programs prepare aspring educators to make a 
                meaningful impact in classrooms schools and communities.</p>
            <p>whether you aspire to become a teacher,administrator,counselor 
                or educational leader,our diverse range of programs offers the perfect pathway to acheive your
                 goals unlock your full potential in shaping the future of education.</p>
        </div>
        
        
    </div>
  )
}

export default About