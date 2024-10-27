import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { items: wishlist } = useSelector((state) => state.wishlist);

  return (
    <div>
      <h1 className="my-12 text-xl">
        <span className="font-semibold">My Wishlist</span> {wishlist.length} items
      </h1>
      <div className="flex flex-wrap justify-center gap-16 max-w-[1400px] mx-auto">
        {wishlist.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
