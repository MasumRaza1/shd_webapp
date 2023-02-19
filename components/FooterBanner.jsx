import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <h3>About</h3>
          <p>"Student help desk" Students just have to visit to our site and to their desired section.</p>
          <h3></h3>
          <p></p>
        </div>
        <div className="right">
          <p></p>
          <h3></h3>
          <p>Have Any Query in Mind ?</p>
          <Link href="mailto:masumrazacse@gmail.com">
            <button type="button">Contact Us</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>


   

  )
}

export default FooterBanner