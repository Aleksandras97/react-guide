import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const {totalAmount} = useSelector(state => state.cart)

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
