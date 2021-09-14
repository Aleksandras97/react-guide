import axios from "axios";
import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      //Login
      console.log('Login');

      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRDMr3MQO9CtQD9OywxW7ef48W9_1jyiw";
    } else {
      //Register
      console.log('Register');
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRDMr3MQO9CtQD9OywxW7ef48W9_1jyiw";
    }
    setIsLoading(true);

    await axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        const resData = res.data;

        console.log(resData);
      })
      .catch(({ response }) => {
        let errorMessage = "Authentication failed";
        alert(errorMessage);
      });
    setIsLoading(false);
  };

  return (
    <section className={classes.auth}>
      {!isLoading && <h1>{isLogin ? "Login" : "Sign Up"}</h1>}
      {isLoading && <p>Sending request</p>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
