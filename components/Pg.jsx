import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Pg = ({ pg: { image, name, slug, rent } }) => {
  return (
    <div>
      <Link href={`/pg/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{rent}</p>
        </div>
      </Link>
    </div>
  )
}

export default Pg