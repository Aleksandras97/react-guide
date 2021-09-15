import axios from 'axios';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInputRef = useRef('')
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;

    if(enteredPassword.trim() === '' && enteredPassword.length < 6){
      return;
    }

    await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCRDMr3MQO9CtQD9OywxW7ef48W9_1jyiw',{
      idToken: authCtx.token,
      password: enteredPassword,
      returnSecureToken: false,
    })
    .then(res => {
      history.replace('/')

    }).catch(({response}) => {
      if (response) {
        console.log(response.data);
      }
    })


  }


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
