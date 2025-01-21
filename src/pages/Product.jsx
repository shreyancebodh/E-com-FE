import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import Rating from "../components/Rating";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../features/products/productsThunks";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { addItemToCart } from "../features/cart/cartThunk";
import { addToWishlist } from "../features/wishlist/wishlistThunk";

const clickTypes = {
  addToCart: "addToCart",
  addToWishlist: "addToWishlist",
};

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    selectedProduct: product,
  } = useSelector((state) => state.products);
  const { items: wishlist = [] } = useSelector((state) => state.wishlist);

  function clickhandler(type) {
    if (type === clickTypes.addToCart) {
      // optimistic update
      dispatch(addToCart(product));

      // add api call
      dispatch(addItemToCart(product))
        .unwrap()
        .catch((err) => {
          // rollback the optimistic update
          dispatch(removeFromCart(product));
        });
    }

    if (type === clickTypes.addToWishlist) {
      dispatch(addToWishlist(product._id));
    }
  }

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, [dispatch]);

  const isInWishlist = wishlist.find(item => item._id === product._id);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading && <ProductSkeleton />}

      {!loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-0">
          <div>
            <div className="mx-auto max-w-[600px] border overflow-hidden">
              <div className="max-h-[600px] mb-[2px] w-full overflow-hidden">
                <img
                  className="mx-auto object-contain hover:scale-105 transition-all duration-200"
                  src={product.imageSrc ? product?.imageSrc[0] : ""}
                />
              </div>
              <div className="w-full flex">
                <div className="border w-[33.33%] overflow-hidden">
                  <img
                    className="hover:scale-105 object-contain transition-all duration-200"
                    src={product.imageSrc ? product?.imageSrc[0] : ""}
                  />
                </div>
                <div className="border w-[33.33%] overflow-hidden">
                  <img
                    className="hover:scale-105 object-contain transition-all duration-200"
                    src={product.imageSrc ? product?.imageSrc[0] : ""}
                  />
                </div>
                <div className="border w-[33.33%] overflow-hidden">
                  <img
                    className="hover:scale-105 object-contain transition-all duration-200"
                    src={product.imageSrc ? product?.imageSrc[0] : ""}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* product details */}
          <div>
            <div className="max-w-[630px] mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="my-3 text-gray-600 text-lg">
                {product.description}
              </p>
              <p className="text-3xl font-semibold text-gray-800">
                ${product.price}
              </p>
              <p className="text-green-600 font-bold mt-2 mb-4">
                inclusive of all tax
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => clickhandler(clickTypes.addToCart)}
                  className="text-[17px] flex-1 font-semibold py-4 rounded-md hover:bg-blue-500 uppercase"
                >
                  <div className="flex items-center justify-center">
                    <ShoppingCartIcon className="size-6 inline mr-3" />
                    <span>Add to Cart</span>
                  </div>
                </Button>

                <Button
                  onClick={isInWishlist ? null : () => clickhandler(clickTypes.addToWishlist)}
                  className={
                    "text-[17px] flex-1 font-semibold uppercase py-4 rounded-md hover:border-gray-900 bg-white border border-gray-300 text-gray-900"
                  }
                >
                  <div className="flex items-center justify-center text-gray-900">
                  {isInWishlist ? <SolidHeartIcon className="size-6 mr-3 text-red-500" /> : <HeartIcon className="size-6 mr-3" />}
                    <span>{isInWishlist ? "Wishlisted" : "Wishlist"} </span>
                  </div>
                </Button>
              </div>
              <br /> <br />
              <hr />
              <br />
              <div className="font-light flex flex-col gap-2">
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 14 days returns and exchanges</p>
              </div>
              <br />
              <hr />
              <br />
              <h2 className="font-bold uppercase mb-2">Reviews and Rating</h2>
              <Rating />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;