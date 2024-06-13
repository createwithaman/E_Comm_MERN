import React from 'react'
import "./Hero.css"
import handIcon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import heroImg from "../Assets/hero_image.png"

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icno">
                <p>new <img src={handIcon} height={50} width={50} alt="Hand_Icon" /></p>
                
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>
                Latest Collection
            </div>
            <img src={arrow_icon} alt="Arrow_icon" />
        </div>
        </div>
        <div className="hero-right">
            <img src={heroImg} height={600} width={450} alt="heroImage" />
        </div>
        </div>
  )
}

export default Hero