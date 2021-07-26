import React, { useContext, useEffect, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };    
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };    
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };    
  }

  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };    
  }

  return  {value: '', isValid: false}
}


const Login = (props) => {

  const authCtx = useContext(AuthContext)


  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: undefined });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: undefined})
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    const idetifier = setTimeout(() => {
      console.log('test');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500)

    return () => {
      console.log('cleanup');
      clearTimeout(idetifier);
    };

  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'PASSWORD_INPUT', val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus()
    } else {
      passwordRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input
          ref={emailRef}
          Value={emailState.value}
          IsValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          id="email"
          type="email"
          label="E-mail"
        />

        <Input 
          ref={passwordRef}
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          id="password"
          type="password"
          label="Password"
        />


        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
