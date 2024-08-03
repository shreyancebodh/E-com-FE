import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/products`
        );
        if (res.status == 200) {
          setProducts(res.data.products);
          console.log(res.data.products);
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
    <div className="flex flex-wrap justify-center gap-5 gap-y-10 max-w-[1400px] mx-auto">
      {isLoading && <ProductCardSkeleton cards={32}/>}

      {!isLoading && products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Products;
