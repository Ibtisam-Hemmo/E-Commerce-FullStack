import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import SignInForm from "./SignInForm";

function SignIn() {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleForm = (event) => {
        if (ref.current && !ref.current.contains(event.target)) callback();
      };
      document.addEventListener("click", handleForm);

      return () => document.removeEventListener("click", handleForm);
    }, []);

    return ref;
  };
  const handleClickOutside = () => {
    setShowForm(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const handleForm = () => {
    setShowForm(true);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      Axios.post("/api/v1/users/signin", userData).then((res) => {
        if (res.data.msg) {
          swal({
            title: "",
            text: res.data.msg,
            icon: "warning",
            button: "OK",
          });
        } else {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <li className="nav-list-item" ref={ref}>
      <button onClick={handleForm} type="submit" className="nav-item btn">
        Sign In
      </button>
      {showForm && (
        <SignInForm
          userData={userData}
          setUserData={setUserData}
          sendData={sendData}
        />
      )}
    </li>
  );
}

export default SignIn;
