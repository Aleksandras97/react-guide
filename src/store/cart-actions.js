import axios from "axios";
import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const getCartData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://sweets-order-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      )
      .then((res) => {
        const data = res.data;

        dispatch(cartActions.repalceCart({
            items: data.items || [],
            totalAmount: data.totalAmount,
        }))
      })
      .catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: err.message,
          })
        );
      });
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending...",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    axios
      .put(
        "https://sweets-order-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {items: cart.items, totalAmount: cart.totalAmount}
      )
      .then(() => {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sending cart data successfully!",
          })
        );
      })
      .catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: err.message,
          })
        );
      });
  };
};
