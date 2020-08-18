import React, { Component } from "react";
import Box from '@vtex/styleguide/lib/Box';
import Divider from '@vtex/styleguide/lib/Divider';

import NavBar from "./components/navbar";
import Items from "./components/items";
import { Default_Items } from './data';
import { handleActons } from "./utils";

class App extends Component {
  state = {
    items: Default_Items
  };

  onIncrement = item => {
    this.setState({ items: handleActons("add", this.state.items, item) });
  };

  onDecrement = item => {
    this.setState({ items: handleActons("minus", this.state.items, item) });
  };

  onReset = () => {
    this.setState({ items: handleActons("reset", this.state.items) });
  };

  onDelete = itemId => {
    this.setState({ items: handleActons("delete", this.state.items, itemId) });
  };

  render() {
    const { items } = this.state;
    return (
      <Box>
        <NavBar
          totalItems={items.reduce((prev, cur) => (prev + cur.quantity), 0)}
        />
        <Divider orientation="horizontal" />
        <main className="container">
          <Items
            items={items}
            onReset={this.onReset}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
          />
        </main>
      </Box>
    );
  }
}

export default App;
