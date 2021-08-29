import useValidation from "../hooks/use-validation";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameValueIsValid,
    hasErrors: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: lastnameValue,
    isValid: lastnameValueIsValid,
    hasErrors: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    valueBlurHandler: lastnameBlurHandler,
    reset: resetlastName,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasErrors: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameValueIsValid && lastnameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const submitForm = (event) => {
    event.preventDefault();
    nameBlurHandler();
    lastnameBlurHandler();
    emailBlurHandler();

    if (!formIsValid) {

      return;
    }

    resetName();
    resetlastName();
    resetEmail();
  };

  const enteredNameIsInvalid = nameHasError
    ? "form-control invalid"
    : "form-control";
  const enteredLastnameIsInvalid = lastnameHasError
    ? "form-control invalid"
    : "form-control";
  const enteredEmailIsInvalid = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitForm}>
      <div className="control-groupenteredValue">
        <div className={enteredNameIsInvalid}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameHasError && (
            <p className="error-text">Entered name must not be empty</p>
          )}
        </div>
        <div className={enteredLastnameIsInvalid}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={lastnameValue}
          />
          {lastnameHasError && (
            <p className="error-text">Entered lastname must not be empty</p>
          )}
        </div>
      </div>
      <div className={enteredEmailIsInvalid}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Entered email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
