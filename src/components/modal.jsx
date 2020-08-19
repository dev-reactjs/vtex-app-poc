import React, { Component } from "react";
import Modal from "@vtex/styleguide/lib/Modal";
import PropTypes from "prop-types";

import Button from "./button";

class ModalWrapper extends Component {
  render() {
    const { isModalOpen, closeModal, message } = this.props;
    return (
      <Modal centered isOpen={isModalOpen} onClose={() => closeModal(false)}>
        <div className="col modal-content">
          <span>{message}</span>
          <div className="row footer-btn">
            <Button variation="primary" onClick={() => closeModal(false)}>
              Cancel
            </Button>
            <Button variation="danger" onClick={() => closeModal(true)}>
              Ok
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalWrapper.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalWrapper;
