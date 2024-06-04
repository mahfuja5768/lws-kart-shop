import ProductList from '@/components/shop/ProductList';
import Sidebar from '@/components/shop/Sidebar';
import React from 'react';

const ProductListPage = () => {
    return (
      <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <ProductList />
      </div>
    );
};

export default ProductListPage;