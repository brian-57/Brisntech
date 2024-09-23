import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import  Hero  from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
 const App = () => {
 const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
     <div className='container'>
      <Title subTitle='Our Program' title='What We Offer'/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What a Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div> 
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>

  )
}
export default App