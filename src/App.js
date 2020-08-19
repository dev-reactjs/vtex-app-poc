import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddToCart from "./screens/addToCart";
import Login from "./screens/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/cart" component={AddToCart} />
        </Switch>
      </Router>
    );
  }
}

export default App;
