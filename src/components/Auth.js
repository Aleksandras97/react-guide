import { useRef } from "react";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth"; 
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const loginHandler = (event) => {
    event.preventDefault();

    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    if (
      password.length < 6 ||
      password.trim() === "" ||
      email.trim() === "" ||
      !email.includes("@")
    ) {
      return;
    }

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
