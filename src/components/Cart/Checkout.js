import useValidation from "../../hooks/use-validation";
import classes from "./Checkout.module.css";

const Checkout = ({ cancelCheckout }) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    blurValueHandler: blurNameHandler,
    changeValueHandler: changeNameHandle,
    reset: resetName,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetHasError,
    blurValueHandler: blurStreetHandler,
    changeValueHandler: changeStreetHandle,
    reset: resetStreet,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: postalHasError,
    blurValueHandler: blurPostalHandler,
    changeValueHandler: changePostalHandle,
    reset: resetPostal,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    blurValueHandler: blurCityHandler,
    changeValueHandler: changeCityHandle,
    reset: resetCity,
  } = useValidation((value) => value.trim() !== "");

  let isFormValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalIsValid &&
    enteredCityIsValid
  ) {
    isFormValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const nameInputClasses = nameHasError ? classes.invalid : classes.control;
  const streetInputClasses = streetHasError ? classes.invalid : classes.control;
  const postalInputClasses = postalHasError ? classes.invalid : classes.control;
  const cityInputClasses = cityHasError ? classes.invalid : classes.control;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={blurNameHandler}
          onChange={changeNameHandle}
          value={enteredName}
        />
      </div>
      {nameHasError && <p>Name can't be empty</p>}
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onBlur={blurStreetHandler}
          onChange={changeStreetHandle}
          value={enteredStreet}
        />
      </div>
      {streetHasError && <p>Street can't be empty</p>}

      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onBlur={blurPostalHandler}
          onChange={changePostalHandle}
          value={enteredPostal}
        />
      </div>
      {postalHasError && <p>Postal Code can't be empty</p>}

      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onBlur={blurCityHandler}
          onChange={changeCityHandle}
          value={enteredCity}
        />
      </div>
      {cityHasError && <p>City can't be empty</p>}

      <div className={classes.actions}>
        <button className={classes.submit} >
          Confirm
        </button>
        <button type="button" onClick={cancelCheckout}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
