import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddToCart from "./screens/addToCart";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AddToCart} />
        </Switch>
      </Router>
    );
  }
}

export default App;
