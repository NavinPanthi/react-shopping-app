import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const carts = useSelector((state) => state.cart.itemsList);

  console.log(carts);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
