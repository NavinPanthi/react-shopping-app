import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CartItem
              id={cartItem.id}
              price={cartItem.price}
              name={cartItem.name}
              quantity={cartItem.quantity}
              total={cartItem.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
