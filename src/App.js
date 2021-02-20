import "./App.css";
import React from "react";
import Dashboad from "./common/dashboad";
import { Route, Switch } from "react-router-dom";
import Signup from "./common/signup";
import Signin from "./common/signin";
import Categories from "./common/categories";
import Products from "./common/products";
import Item from "./common/item";
import Cart from "./common/cart";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard" component={Dashboad}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/item" component={Item}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
