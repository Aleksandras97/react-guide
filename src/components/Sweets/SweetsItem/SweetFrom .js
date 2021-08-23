import styles from "./SweetFrom.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const SweetFrom = (props) => {

  const [amountIsVlid, setAmountIsVlid] = useState(true)

  const amountRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsVlid(false);
      return; 
    }


    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsVlid && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
  );
};

export default SweetFrom;
