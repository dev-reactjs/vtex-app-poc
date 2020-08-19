import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "./button";
import Modal from "./modal";

class Item extends Component {
  state = {
    isModalOpen: false,
  };

  handleRemove = (status) => {
    if (status) {
      const { item, onDelete } = this.props;
      onDelete(item.id);
    }
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span
              style={{ fontSize: 24 }}
              className={this.getBadgeClasses(item)}
            >
              {this.formatCount(item)}
            </span>
          </div>
          <div className="col-md-4">
            <Button variation="primary" onClick={() => onIncrement(item)}>
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </Button>
            <Button
              variation="secondary"
              onClick={() => onDecrement(item)}
              disabled={!item.quantity ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </Button>
            <Button
              variation="danger"
              onClick={() => this.setState({ isModalOpen: true })}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </Button>
          </div>
          <Modal
            message="You would not be able to restore it.Are you sure you want to delete it ?"
            closeModal={this.handleRemove}
            isModalOpen={this.state.isModalOpen}
          />
        </div>
      </div>
    );
  }

  getBadgeClasses = (item) => {
    let classes = "badge m-2 badge-";
    classes += item.quantity === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = (item) => {
    const { quantity } = item;
    return quantity === 0 ? "Zero" : quantity;
  };
}

Item.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Item;
