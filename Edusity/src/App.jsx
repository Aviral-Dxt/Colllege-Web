import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
          {/* <h1>jai shree Ram</h1> */}
          <Navbar/>
          <Hero/>
          <Title title="What We Offer" subTitle = "Our Programs"/>
          <Programs/>
    </div>
  )
}

export default App
