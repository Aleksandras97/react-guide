import { useState } from "react";

const useInput = (validateValue) => {
  const [enterValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterValue);
  const hasError = !valueIsValid && isTouched;

  const blurValueHandler = () => {
    setIsTouched(true);
  };

  const changeValueHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: enterValue,
    isValid: valueIsValid,
    hasError,
    blurValueHandler,
    changeValueHandler,
    reset
  };
};

export default useInput;
