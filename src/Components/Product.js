import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Product = ({ product, addToCart }) => {
  if (!product) {
    return (
      <div>
        <h2>Product</h2>
        <p>No product data available.</p>
      </div>
    );
  }
  return (
    <div className="container my-3 p-3 bg-light rounded shadow-sm">
      {product.Image}
      <div className="d-flex flex-column justify-content-end align-items-center mt-3">
        <h2>{product.name}</h2>
        <h3 className="d-flex justify-content-center gap-3">
          <Badge bg="secondary">₹{product.price}</Badge>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </h3>
      </div>
    </div>
  );
};

export default Product;
