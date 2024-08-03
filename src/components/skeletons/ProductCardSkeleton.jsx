import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = ({cards}) => {
  return Array(cards).fill(0).map((item, ind) => (
    <div key={ind} className="w-[300px]">
      <Skeleton height={300} />
      <div>
        <h2 className="mt-2">
          <Skeleton height={35} />
        </h2>
      </div>
    </div>
  ));
};

export default ProductCardSkeleton;
