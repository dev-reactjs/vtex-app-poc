import React from "react";
import PropTypes from 'prop-types';

const NavBar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalItems}
        </span>
        Items
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  totalItems: PropTypes.number
};

export default NavBar;
