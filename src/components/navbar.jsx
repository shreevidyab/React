import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-item nav-link active">
              <NavLink to="/list">List</NavLink>
            </p>
            <p className="nav-item nav-link">
              <NavLink to="/table">Table</NavLink>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
