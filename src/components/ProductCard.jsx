import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, name, price, imageSrc }) => {
  return (
    <Link to={`/products/${_id}`} className="w-[300px] hover:shadow-md">
      <img
        className="h-[300px] w-full object-contain"
        src={imageSrc[0]}
        alt=""
      />
      <div className="px-2">
        <h2 className="mt-2">{name}</h2>
        <p className="mb-2">${price}</p>
      </div>
      {/* <p>{description.slice(0, 100)}</p> */}
    </Link>
  );
};

export default ProductCard;
