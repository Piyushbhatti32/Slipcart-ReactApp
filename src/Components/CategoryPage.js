import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const CategoryPage = ({ products = [], addToCart }) => {
  const { category } = useParams();
  const filtered = products.filter(
    (p) => String(p.category).toLowerCase() === String(category).toLowerCase()
  );

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-capitalize">{category} Products</h2>
      <ProductList products={filtered} addToCart={addToCart} />
    </div>
  );
};

export default CategoryPage;