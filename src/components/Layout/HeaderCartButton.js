import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({onOpen}) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
  const [btnIsHigh, setBtnIsHigh] = useState(false)
  
  const btnClasses = `${styles.button} ${btnIsHigh ? styles.bump : ''}`;
  
  
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHigh(true);

    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={onOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
