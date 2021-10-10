
import './App.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import PlacedOrder from "./components/PlacedOrder/PlacedOrder";
import NotFound from "./components/NotFound/NotFound";




function App() {
  return (
      <div>
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
                  <Route  path="/placeorder">
                      <PlacedOrder></PlacedOrder>
                  </Route>

              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
