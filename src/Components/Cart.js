import React from "react";
import { Button } from "react-bootstrap";

const Cart = ({ cart = [], removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity, clearCart }) => {
  const total = cart.reduce((s, item) => s + item.price * (item.qty || 1), 0);
  if (cart.length === 0) {
    return (
      <div className="container my-4  min-vh-100">
        <h2>Your cart is empty</h2>
      </div>
    );
}
  return (
    <div className="container my-4  min-vh-100">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <div className="d-flex align-items-center gap-2 mt-2">
                <Button variant="danger" size="sm" onClick={() => decreaseCartItemQuantity(item.id, item.qty - 1)}>
                -
              </Button>
                Qty: {item.qty || 1}
              <Button variant="success" size="sm" onClick={() => increaseCartItemQuantity(item.id, item.qty + 1)}>
                +
              </Button>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>₹{item.price * (item.qty || 1)}</div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="mt-3">Total: ₹{total}</h4>
      <div className="d-flex justify-content-center gap-3">
      <Button variant="danger" onClick={() => clearCart()}>Clear Cart</Button>
      <Button variant="success" onClick={() => alert("Proceeding to checkout...")}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;