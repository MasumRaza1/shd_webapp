import React from 'react';
import Link from 'next/link';



const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">👋 Hii</p>
        <h3>Welcome to</h3>
        <h1>SHD<span id="dot">.</span></h1>
        

        <div>
          <Link href="https://masum-potfolio.netlify.app/">
            <button type="button">About Me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner