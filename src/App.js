import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sweets from "./components/Sweets/Sweets";

function App() {
  const [cartIsSown, setCartIsSown] = useState(false);

  const showCartHandler = () => {
    setCartIsSown(true);
  }
  const hideCartHandler = () => {
    setCartIsSown(false);
  }

  return (
    <Fragment>
      {cartIsSown && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Sweets />
      </main>
    </Fragment>
  );
}

export default App;
