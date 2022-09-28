import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./Signin";
import SignUp from "./Signup";

function Navbar() {
  return (
    <header>
      <nav>
        <img src="./assets/middle.png" alt="" className="middle" />
        <h1>BIKA</h1>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/products" className="nav-item">
              Products
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/cart" className="nav-item">
              Cart
            </NavLink>
          </li>
          <SignUp />
          <SignIn />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
