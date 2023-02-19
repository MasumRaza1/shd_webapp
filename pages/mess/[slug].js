import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiTwotonePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link';

import { client, urlFor } from '../../lib/client';
import { Mess } from '../../components';


const messDetails = ({ mess, messData }) => {
  const { image, name, details, price, googlemaplink, ownerPhoneNumber, address, city, state, pincode, category, facilities  } = mess;
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
          <p className="price">₹{price}/per month</p>
          <div className="address">
            <h3>Address:</h3>
            <p>{address}</p>
          
           <p><span className='address-heading'>City:</span>{city}</p>
           <p><span className='address-heading'>State:</span>{state}</p>
           <p><span className='address-heading'>Pincode:</span>{pincode}</p>

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
              {messData.map((item) => (
                <Mess key={item._id} mess={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "mess"] {
    slug {
      current
    }
  }
  `;

  const messData = await client.fetch(query);

  const paths = messData.map((mess) => ({
    params: { 
      slug: mess.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "mess" && slug.current == '${slug}'][0]`;
  const messQuery = '*[_type == "mess"]'
  
  const mess = await client.fetch(query);
  const messData = await client.fetch(messQuery);

  console.log(mess);

  return {
    props: { messData, mess }
  }
}

export default messDetails