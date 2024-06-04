import React from "react";
import ProductCard from "../shop/ProductCard";
import { getAllProducts } from "@/queries";

const TrendingProducts = async () => {
  const allProducts = await getAllProducts();
  const trendingProducts = allProducts?.filter(
    (product) => product?.trending === true
  );
  const trending6 = trendingProducts.slice(6, 18);

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {trending6?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
