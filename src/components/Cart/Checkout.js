import useValidation from "../../hooks/use-validation";
import classes from "./Checkout.module.css";

const Checkout = ({ cancelCheckout, confirmCheckout }) => {

  const isNotEmpty = value => value.trim() !== '';
  const isFiveChars = value => value.trim().length === 5;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    blurValueHandler: blurNameHandler,
    changeValueHandler: changeNameHandle,
    reset: resetName,
  } = useValidation(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetHasError,
    blurValueHandler: blurStreetHandler,
    changeValueHandler: changeStreetHandle,
    reset: resetStreet,
  } = useValidation(isNotEmpty);
  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: postalHasError,
    blurValueHandler: blurPostalHandler,
    changeValueHandler: changePostalHandle,
    reset: resetPostal,
  } = useValidation(isFiveChars);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    blurValueHandler: blurCityHandler,
    changeValueHandler: changeCityHandle,
    reset: resetCity,
  } = useValidation(isNotEmpty);

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
    blurNameHandler();
    blurStreetHandler();
    blurPostalHandler();
    blurCityHandler();

    if (!isFormValid) {
      return;
    }

    const userData = {
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    }

    confirmCheckout(userData);

    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const nameInputClasses = nameHasError ? classes.invalid : ''
  const streetInputClasses = streetHasError ? classes.invalid : ''
  const postalInputClasses = postalHasError ? classes.invalid : ''
  const cityInputClasses = cityHasError ? classes.invalid : ''

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={`${classes.control} ${nameInputClasses}`}>
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
      <div className={`${classes.control} ${streetInputClasses}`}>
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

      <div className={`${classes.control} ${postalInputClasses}`}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onBlur={blurPostalHandler}
          onChange={changePostalHandle}
          value={enteredPostal}
        />
      </div>
      {postalHasError && <p>Postal Code cant be only 5 characters</p>}
      <div className={`${classes.control} ${cityInputClasses}`}>
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
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={cancelCheckout}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
