import React from "react";
import axios from "axios";

function Signout() {
  const signout = () => {
    axios
      .get("/signout")
      .then((data) => (window.location.href = "/"))
      .catch((err) => console.log(err));
  };
  return (
    <button onClick={signout} type="submit" className="nav-item btn">
      Sign out
    </button>
  );
}

export default Signout;
