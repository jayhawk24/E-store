import "./App.css";
import React from "react";
import Dashboad from "./common/dashboad";
import { Route, Switch } from "react-router-dom";
import Signup from "./common/signup";
import Signin from "./common/signin";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard" component={Dashboad}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/signin" component={Signin}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
