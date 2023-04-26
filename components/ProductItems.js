import React from 'react';
import Link from 'next/link';


export default function ProductItems({product}) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text*/}
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        ></img>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>&#8358;{product.price}</p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
