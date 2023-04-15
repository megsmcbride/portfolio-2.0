import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
  <div className="navbar-container">
   <nav>
     <NavLink to="./home"> home </NavLink>
     <NavLink to="./about"> about </NavLink>
     <NavLink to="./projects"> projects </NavLink>
     <NavLink to="./contact"> contact </NavLink>
   </nav>
   </div>
  );
}

export default Navbar;