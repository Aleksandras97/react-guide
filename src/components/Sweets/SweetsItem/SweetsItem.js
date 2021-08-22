import classes from "./SweetsItem.module.css";
import SweetFrom from "./SweetFrom ";

const SweetsItem = ({ name, description, price }) => {
  const formPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.sweet}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <h3 className={classes.price}>{formPrice}</h3>
      </div>
      <div>
          <SweetFrom />
      </div>
    </li>
  );
};

export default SweetsItem;
