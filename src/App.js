import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import("./pages/NewQuote"));

function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </MainLayout>
  );
}

export default App;
