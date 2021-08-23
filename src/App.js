import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sweets from "./components/Sweets/Sweets";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsSown, setCartIsSown] = useState(false);

  const showCartHandler = () => {
    setCartIsSown(true);
  }
  const hideCartHandler = () => {
    setCartIsSown(false);
  }

  return (
    <CartProvider>
      {cartIsSown && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Sweets />
      </main>
    </CartProvider>
  );
}

export default App;
