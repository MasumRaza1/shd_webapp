import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiTwotonePhone } from 'react-icons/ai';
import { FaMapMarkerAlt, FaWifi, FaRegCheckCircle, FaRegTimesCircle,FaChargingStation, FaBath, FaMapPin, FaAccessibleIcon } from "react-icons/fa";
import Link from 'next/link';

import { client, urlFor } from '../../lib/client';
import { Pg } from '../../components';





const PgDetails = ({ pg, pgData }) => {
  const { image, name, details, rent, googlemaplink, ownerPhoneNumber, address, city, state, pincode, category, facilities  } = pg;
  const [index, setIndex] = useState(0);
 

 

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}<span id="dot">.</span></h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">₹{rent}/per month</p>
          <div className="address">
            <h3>Address:</h3>
            <p><span className='icon-add'><FaMapMarkerAlt/></span>{address}</p>
          
           <p><span className='address-heading'>City:</span>{city}</p>
           <p><span className='address-heading'>State:</span>{state}</p>
           <p><span className='address-heading'>Pincode:</span>{pincode}</p>

            </div>
            <h3>Facilities:</h3>
            <div className='facilities'>
            
            <p><span className='address-heading icon-true'><FaRegCheckCircle /></span><FaWifi/> wifi</p>
           <p><span className='address-heading icon-false'><FaRegTimesCircle /> </span><FaBath/> Gyser</p>
           <p><span className='address-heading icon-true'><FaRegCheckCircle /> </span><FaChargingStation/> Invertor</p>

           </div>
                  

          <div className="buttons">
          <Link href={googlemaplink} target="_blank"> <button type="button" className="add-to-cart"><FaMapMarkerAlt /> Direction</button></Link>
          <Link href={`tel:${ownerPhoneNumber}`}> <button type="button" className="buy-now"> <AiTwotonePhone />  Contact Owner</button> </Link>
          

          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like<span id="dot">.</span></h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {pgData.map((item) => (
                <Pg key={item._id} pg={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "pg"] {
    slug {
      current
    }
  }
  `;

  const pgData = await client.fetch(query);

  const paths = pgData.map((pg) => ({
    params: { 
      slug: pg.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}



export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "pg" && slug.current == '${slug}'][0]`;
  const pgQuery = '*[_type == "pg"]'
  
  const pg = await client.fetch(query);
  const pgData = await client.fetch(pgQuery);

  console.log(pg);

  return {
    props: { pgData, pg }
  }
}

export default PgDetails