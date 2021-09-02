import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductsDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
