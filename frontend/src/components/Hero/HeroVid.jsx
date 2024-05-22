import React from 'react'
import './HeroVid.css'
import hero_vid from '../../assest/banner/videoplayback.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <video className='hero-video' src={hero_vid} autoPlay loop muted />
    </div>
  )
}

export default Hero