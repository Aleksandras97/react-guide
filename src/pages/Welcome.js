import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>The wellcome page</h1>
      <Route path="/welcome/new-user" exact>
        <p>Welcome user!</p>
      </Route>
    </div>
  );
};

export default Welcome;
