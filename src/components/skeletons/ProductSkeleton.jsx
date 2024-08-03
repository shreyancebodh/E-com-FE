import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <div className="mx-auto max-w-[600px]">
          <div className="max-h-[600px] mb-1">
            <Skeleton height={600} />
          </div>
          <div className="w-full flex gap-1">
            <div className="w-[33.33%]">
              <Skeleton height={200} />
            </div>
            <div className="w-[33.33%]">
              <Skeleton height={200} />
            </div>
            <div className="w-[33.33%]">
              <Skeleton height={200} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[630px] mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800">
            <Skeleton height={40} />
          </h1>
          <p className="my-3 text-gray-600 text-lg">
            <Skeleton height={80} />
          </p>
          <p className="text-3xl font-semibold text-gray-800">
            <Skeleton height={40} width={120} />
          </p>
          <p className="text-green-600 font-bold mt-2 mb-4">
            <Skeleton height={25} width={150} />
          </p>
          <div className="flex justify-between gap-2">
            <div className="flex-1">
              <Skeleton height={60}/>
            </div>

            <div className="flex-1">
              <Skeleton height={60}/>
            </div> 
          </div>
          <br /> <br />
          <hr />
          <br />
          <div className="font-light flex flex-col gap-2">
            <Skeleton height={20} width={200}/>
            <Skeleton height={20} width={270}/>
            <Skeleton height={20} width={290}/>
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
