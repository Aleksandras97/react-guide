import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout:() => {},
    onLogin: (username, password) => {}
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedTokenForLogingIn = localStorage.getItem("isLoggedIn");
    
        // eslint-disable-next-line eqeqeq
        if (storedTokenForLogingIn == 1) {
          setIsLoggedIn(true);
        }
      }, []);
    
      const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
      };


    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;
