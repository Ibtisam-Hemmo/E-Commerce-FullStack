import "./App.css";
import React from "react";
import SignIn from "./components/Navbar/Signin";
import Signup from "./components/Navbar/Signup";
import FilterBar from "./components/Products/Sidebar";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <Signup />
      <SignIn />
      <FilterBar />
      <Cart />
    </div>
  );
}

export default App;
