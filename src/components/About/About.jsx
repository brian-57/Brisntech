import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorows Leaders Today</h2>
            <p>Embark on a yransformative educational journey with our university's comphrehensive program .Our cutting-edge curriculum is designed to empower students with the knowledge ,skills and exeperinces needed to excel in the dynamic field of education</p>
            <p>With a focus on innovation hands-on learning and personalized mentorship our programs prepare aspiring educators to make a meaningful impact in clssrooms ,schools and communities.</p>
            <p>Whether you aspire to become a teacher ,sdministrator ,counselor or educational leader,our diverse range of programs offers the perfect pathway to acieve your goals and unlock your full potential in shaping future education.</p>
        </div>
    </div>
  )
}

export default About