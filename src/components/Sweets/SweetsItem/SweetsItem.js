import classes from "./SweetsItem.module.css";
import SweetFrom from "./SweetFrom ";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const SweetsItem = ({ id, name, description, price }) => {
  const formPrice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      description: description,
      amount: amount,
      price: price,
    })
  }

  return (
    <li className={classes.sweet}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <h3 className={classes.price}>{formPrice}</h3>
      </div>
      <div>
          <SweetFrom onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default SweetsItem;
