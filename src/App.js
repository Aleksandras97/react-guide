import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Sweets from "./Components/Sweets/Sweets";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart onHideCart={closeCartHandler} />}
      <Header onShowCart={openCartHandler} />
      <main>
        <Sweets />
      </main>
    </CartProvider>
  );
}

export default App;
