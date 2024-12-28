import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import arrow_2 from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus container'>
      <div className="gallery">
        <img src={gallery_1} alt="g-1" />
        <img src={gallery_2} alt="g-2" />
        <img src={gallery_3} alt="g-3" />
        <img src={gallery_4} alt="g-4" />
      </div>
     
     <button className='btn drk-btn'> See more here <img src={arrow_2} alt="arrow-img" /></button>
    
    </div>
  )
}

export default Campus
