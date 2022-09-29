import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./Signin";
import Signout from "./Signout";
import SignUp from "./Signup";

function Navbar({ setOffset, isLogged, showForm, setShowForm }) {
  return (
    <header>
      <nav>
        <img src="./assets/middle.png" alt="" className="middle" />
        <h1>BIKA</h1>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              onClick={() => {
                setOffset(0);
              }}
              to="/"
              className="nav-item"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              onClick={() => {
                setOffset(0);
              }}
              to="/products"
              className="nav-item"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/cart" className="nav-item">
              Cart
            </NavLink>
          </li>
          {isLogged.msg ? (
            <>
              <SignUp />
              <SignIn showForm={showForm} setShowForm={setShowForm} />
            </>
          ) : (
            <Signout />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
