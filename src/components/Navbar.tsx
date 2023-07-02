import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <NavLink className="nav-item" to="./"> home </NavLink>
        <NavLink className="nav-item" to="./about">about</NavLink>
        <NavLink className="nav-item" to="./projects">projects</NavLink>
        <NavLink className="nav-item" to="./contact">contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
