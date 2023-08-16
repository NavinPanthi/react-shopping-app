import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
import { sendCartData, fetchData } from "./store/cartAction";

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if (cart.changed) {
      dispatch(fetchData());
    }
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification.open && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
// const sendRequest = async () => {
//   // send state as sending request.
//   dispatch(
//     UIActions.showNotification({
//       open: true,
//       message: "Sending request.",
//       type: "warning",
//     })
//   );
//   const response = await fetch(
//     "https://redux-shopping-app-1f3e7-default-rtdb.firebaseio.com/cartItems.json",
//     { method: "PUT", body: JSON.stringify(cart) }
//   );
//   const data = await response.json();
//   // send state as request is successful.
//   dispatch(
//     UIActions.showNotification({
//       open: true,
//       message: "Sent request to database successfully.",
//       type: "success",
//     })
//   );
// };
// sendRequest().catch((err) => {
//   //send state as error.
//   dispatch(
//     UIActions.showNotification({
//       open: true,
//       message: "Request failed.",
//       type: "error",
//     })
//   );
// });
