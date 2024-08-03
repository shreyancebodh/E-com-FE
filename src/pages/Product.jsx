import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import Rating from "../components/Rating";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/products/${params.id}`
        );
        console.log(res.data);

        if (res.status == 200) {
          setProduct(res.data.product);
        } else {
          setError("Something went wrong!");
        }
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {isLoading && <ProductSkeleton/>}

      {!isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                {/* <img
                className="border w-[33.33%] object-contain"
                src={product.imageSrc ? product?.imageSrc[0] : ""}
              />
              <img
                className="border w-[33.33%] object-contain"
                src={product.imageSrc ? product?.imageSrc[0] : ""}
              /> */}
              </div>
            </div>
          </div>

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
                <Button className="text-[17px] flex-1 font-semibold py-4 rounded-md hover:bg-blue-500 uppercase">
                  <div className="flex items-center justify-center">
                    <ShoppingCartIcon className="size-6 inline mr-3" />
                    <span>Add to Cart</span>
                  </div>
                </Button>

                <Button
                  className={
                    "text-[17px] flex-1 font-semibold uppercase py-4 rounded-md hover:border-gray-900 bg-white border border-gray-300 text-gray-900"
                  }
                >
                  <div className="flex items-center justify-center text-gray-900">
                    <HeartIcon className="size-6 mr-3" />
                    <span>Wishlist</span>
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

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  />
</svg>;
