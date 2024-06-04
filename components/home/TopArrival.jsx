import { getAllProducts } from "@/queries";
import React from "react";
import ProductCard from "../shop/ProductCard";

const TopArrival = async () => {
  const allProducts = await getAllProducts();
  const topNewProducts = allProducts?.filter(
    (product) => product?.topNew === true
  );
  const top6 = topNewProducts?.slice(0, 6);
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {top6?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopArrival;
