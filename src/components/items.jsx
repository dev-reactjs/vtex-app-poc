import React, { Component } from "react";
import Card from "@vtex/styleguide/lib/Card";
import PropTypes from "prop-types";

import Item from "./item";
import Button from "./button";

class Items extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, items } = this.props;
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
        {items.map((item) => (
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
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Items;
