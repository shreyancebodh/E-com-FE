import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistThunk";

const ProductCard = ({ _id, name, price, imageSrc }) => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="w-[300px] hover:shadow-md relative"
    >
      {pathName === "/wishlist" && (
        <XCircleIcon
          onClick={(e) => {
            dispatch(removeFromWishlist(_id))
          }}
          className="absolute cursor-pointer right-1 top-1 size-8 text-gray-300"
        />
      )}
      <img
        onClick={() => {
          navigate(`/products/${_id}`);
        }}
        className="h-[300px] w-full object-contain cursor-pointer"
        src={imageSrc[0]}
        alt=""
      />
      <div className="px-2">
        <h2 className="mt-2">{name}</h2>
        <p className="mb-2">${price}</p>
      </div>
      {/* <p>{description.slice(0, 100)}</p> */}
    </div>
  );
};

export default ProductCard;
