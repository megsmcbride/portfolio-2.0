import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    
  <div className="navbar-container">
   <div className="corner-container"></div>
      
   <nav>
   <div className="corner-container"><NavLink className="nav-item" to=""></NavLink></div>
     
     <NavLink className="nav-item" to="./"> home </NavLink>
     <NavLink className="nav-item" to="./about"> about </NavLink>
     <NavLink className="nav-item" to="./projects"> projects </NavLink>
     <NavLink className="nav-item" to="./contact"> contact </NavLink>
   </nav>
   </div>
  );
}

export default Navbar;