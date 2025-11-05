import React from "react";
import Product from "./Product";
import { useSearchParams } from 'react-router-dom';

const ProductList = (props) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const displayProducts = category 
    ? props.products.filter(product => product.category === category)
    : props.products;

  return (
    <div className="container my-4 min-vh-100">
      <h1 className="text-center">{category ? category : 'All'} Products</h1>
      <div className="row">
        {displayProducts.map((product) => (
          <div
            className="product-card col-md-4"
            key={product.id}
          >
            <Product product={product} addToCart={props.addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
