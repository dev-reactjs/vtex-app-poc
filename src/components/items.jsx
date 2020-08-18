import React, { Component } from "react";
import Card from "@vtex/styleguide/lib/Card";
import PropTypes from 'prop-types';

import Item from "./item";
import Button from "./button";

class Items extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      items,
    } = this.props;
    return (
      <Card>
        <div>
          <Button
            variation="secondary"
            onClick={onReset}
            disabled={!items.length ? "disabled" : ""}
          >
            <i className="fa fa-refresh" aria-hidden="true" />
          </Button>
        </div>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </Card>
    );
  }
}

Items.propTypes = {
  onReset: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelete: PropTypes.func,
  items: PropTypes.array,
};  

export default Items;
