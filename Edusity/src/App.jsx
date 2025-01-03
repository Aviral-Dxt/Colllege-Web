import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
          {/* <h1>jai shree Ram</h1> */}
          <Navbar/>
          <Hero/>
          <Title  subTitle = "Our Programs" title="What We Offer"/>
          <Programs/>
          <About/>
          <Title subTitle = "Gallery"  title="Campus Photos"/>
          <Campus/>
          <Title subTitle = "TESTIMONIALS"  title="What Student Says"/>
          <Testimonials/>
          <Title subTitle = "CONTACT US"  title="Get in Touch"/>
          <Contact/>
    </div>
  )
}

export default App
