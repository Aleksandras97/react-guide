import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./SweetItem.module.css";
import SweetsItemForm from "./SweetsItemForm";

const SweetItem = ({ id, name, description, price }) => {

  const cartCtx = useContext(CartContext);

  const formatedPrice = `$${price}`

  const getRandomEmoji = () => {
    const sweetEmoji = ["🍬", "🍡", "🎂", "🍨", "🍩"];

    return sweetEmoji[Math.floor(Math.random() * sweetEmoji.length)];
  };

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    })
  };

  return (
    <li className={styles.item}>
      <div>
        <h3>
          {getRandomEmoji()}
          {name}
        </h3>
        <div className={styles.description}>{description.substring(0, 150)}...</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <SweetsItemForm onAmountIsValid={addToCartHandler} />
      </div>
    </li>
  );
};

export default SweetItem;
