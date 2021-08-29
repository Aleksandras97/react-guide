import axios from "axios";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onCloseCart }) => {

  const [isCheckout, setIsCheckout] = useState(false)

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const placeOrder = () => {

    const order = {
      price: cartCtx.totalAmount,
      sweets: cartCtx.items,
    }


    axios.post('https://sweets-order-app-default-rtdb.europe-west1.firebasedatabase.app/orders.json', order)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cancelCheckout = () => {
    setIsCheckout(false);
  }

  const modalActions = <div className={styles.actions}>
  <button className={styles["button--alt"]} onClick={onCloseCart}>
    Close
  </button>
  {hasItems && <button className={styles.button} onClick={orderHandler} >Order</button>}
</div>

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout cancelCheckout={cancelCheckout} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
