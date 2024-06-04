"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ product }) => {
  const [image, setImage] = useState(product?.image[0]);
  const gallery = product?.image;
  const newGallery = [...gallery];
  newGallery.shift();
  return (
    <div>
      <Image
        src={image}
        alt="product"
        className="w-full"
        width={100}
        height={100}
      />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {newGallery.map((image) => (
          <button key={image} onClick={() => setImage(image)}>
            <Image
              key={image}
              width={100}
              height={100}
              src={image}
              alt="product2"
              className="w-full cursor-pointer border border-primary"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
