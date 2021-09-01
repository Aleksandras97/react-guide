import { Fragment } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Fragment>
        <Header />
        {!isAuth && <Auth />}

        {isAuth && (
          <Fragment>
            <UserProfile />
            <Counter />
          </Fragment>
        )}
      </Fragment>
    </div>
  );
}

export default App;
