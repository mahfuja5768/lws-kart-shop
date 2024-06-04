import React from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/queries";

const ProductList = async () => {
  const allProducts = await getAllProducts();
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
