import ProductDescription from "@/components/shop/productDetails/ProductDescription";
import ProductImages from "@/components/shop/productDetails/ProductImages";
import ProductInfo from "@/components/shop/productDetails/ProductInfo";
import RelatedProducts from "@/components/shop/productDetails/RelatedProducts";
import { getProductById } from "@/queries";
import React from "react";

export async function generateMetadata({ params: { id } }) {
  const productInfo = await getProductById(id);

  return {
    title: `LWS-Kart || ${productInfo?.name}`,
    description: productInfo?.description,
    openGraph: {
      images: [productInfo?.image[0]],
    },
  };
}

const ProductDetailsPage = async ({ params: { id } }) => {
  const product = await getProductById(id);
  console.log(product);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>
      <div className="container grid grid-cols-2 gap-6">
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductDescription product={product} />
      <RelatedProducts />
    </>
  );
};

export default ProductDetailsPage;
