import { useState } from "react";

const useValidation = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const blurValueHandler = () => {
    setIsTouched(true);
  };

  const changeValueHandler = (event) => {
      setEnteredValue(event.target.value);
  };

  const reset = () => {
      setEnteredValue('')
      setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid,
    hasError,
    blurValueHandler,
    changeValueHandler,
    reset
  };
};

export default useValidation;
