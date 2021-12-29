import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CheckoutPage from "../Pages/CheckoutPage";
import HomePage from "../Pages/HomePage";

function ALlRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/checkout">
        <CheckoutPage />
      </Route>
    </Switch>
  );
}
export default ALlRoutes;
