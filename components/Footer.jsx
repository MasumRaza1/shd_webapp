import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Student Help Desk All rights reserverd</p>
      <p className="icons icon-add">
      <Link href="https://www.linkedin.com/in/masumrazacse/" className='linkedln'><AiFillLinkedin /></Link> 
       <Link href="https://www.instagram.com/_masoomraza_/" className='instagram'><AiFillInstagram /></Link> 
      </p>
      
    </div>
  )
}

export default Footer