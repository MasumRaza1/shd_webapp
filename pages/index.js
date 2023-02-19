import React from 'react';

import { client } from '@/lib/client';
import {Pg, Product, Mess, FooterBanner, HeroBanner } from '@/components';

const Home = ({ products, bannerData, pgData, messData }) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

    <div className='container'>
    <div className='products-heading'>
      <h2>Accommodation<span id="dot">.</span></h2>
      <p>Paying Guest and Flat</p>
    </div>

    <div className="products-container">
      {pgData?.map((pg) => <Pg key={pg._id} pg={pg} />)}
    </div>
    </div>

    <div className='container'>
    <div className='products-heading'>
      <h2> Products<span id="dot">.</span></h2>
      <p>By your requirement product</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    </div>

    <div className='container'>
    <div className='products-heading'>
      <h2>Food<span id="dot">.</span></h2>
      <p>Mess, Canteen and Restaurants</p>
    </div>

    <div className="products-container">
      {messData?.map((mess) => <Mess key={mess._id} mess={mess} />)}
    </div>
    </div>
    
    
    
    

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const pgQuery = '*[_type == "pg"]';
  const pgData = await client.fetch(pgQuery);

  const messQuery = '*[_type == "mess"]';
  const messData = await client.fetch(messQuery);


  return {
    props: { products, bannerData, pgData, messData }
  }
}

export default Home;