import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const total = cartItems.reduce((total, item) => {
    return (total = total + item.totalPrice);
  }, 0);
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </>
  );
};

export default Layout;
