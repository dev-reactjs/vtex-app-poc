import React, { Component } from "react";
import Button from "@vtex/styleguide/lib/Button";
import PropTypes from 'prop-types';

class ButtonWrapper extends Component {
  render() {
    const { className, children } = this.props;
    return (
        <div className={`btn ${className}`}>
            <Button {...this.props} >
                {children}
            </Button>
        </div>
    );
  }
}

ButtonWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};  

export default ButtonWrapper;
