import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../features/products/productsThunks";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const {items: products, error, loading} = useSelector(state => state.products);
    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(
    //       `${import.meta.env.VITE_API_BASE_URL}/api/v1/products`
    //     );
    //     if (res.status == 200) {
    //       setProducts(res.data.products);
    //       console.log(res.data.products);
    //     } else {
    //       setError("Something went wrong!");
    //     }
    //     setIsLoading(false);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    // setTimeout(() => {
    //   fetchData();
    // }, 2000);

  useEffect(() => {
    // setTimeout(() => {
      dispatch(loadProducts());
    // }, 2000);
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 gap-y-10 max-w-[1400px] mx-auto">
      {loading && <ProductCardSkeleton cards={32}/>}

      {!loading && products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Products;
