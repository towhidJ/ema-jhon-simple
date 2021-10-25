
import './App.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import PlacedOrder from "./components/PlacedOrder/PlacedOrder";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";




function App() {
  return (
      <div>
          <AuthProvider>
          <BrowserRouter>
              <Header></Header>
              <Switch>
                  <Route exact path="/">
                      <Shop></Shop>
                  </Route>
                  <Route  path="/shop">
                      <Shop></Shop>
                  </Route>
                  <Route  path="/inventory">
                      <Inventory></Inventory>
                  </Route>
                  <Route  path="/orders">
                      <OrderReview></OrderReview>
                  </Route>
                  <PrivateRoute  path="/placeorder">
                      <PlacedOrder></PlacedOrder>
                  </PrivateRoute>
                  <PrivateRoute path="/shipping">
                      <Shipping></Shipping>
                  </PrivateRoute>
                  <Route  path="/login">
                      <Login></Login>
                  </Route>
                  <Route  path="/register">
                      <Register></Register>
                  </Route>

                  <Route exact path="*">
                      <p>Not Found</p>
                  </Route>

              </Switch>
          </BrowserRouter>
          </AuthProvider>

      </div>
  );
}

export default App;
