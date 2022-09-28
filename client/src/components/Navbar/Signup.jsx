import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    img: "",
    password: "",
    confirmPassword: "",
  });
  const handleForm = () => {
    setShowForm(true);
  };

  const useClickOutside = (cb) => {
    const signUpRef = useRef();

    useEffect(() => {
      const handleSignUpShow = (e) => {
        if (!signUpRef.current.contains(e.target)) cb();
      };

      document.addEventListener("click", handleSignUpShow);

      return () => {
        document.removeEventListener("click", handleSignUpShow);
      };
    });

    return signUpRef;
  };
  const signUpRef = useClickOutside(() => setShowForm(false));
  const sendData = (e) => {
    e.preventDefault();
    if(userData.email && userData.confirmPassword && userData.img && userData.name && userData.password){
      if(userData.confirmPassword === userData.password){
        Axios.post("/api/v1/users/signup", userData)
        .then((res) => {
          if (res.data.msg) {
          swal({
            title: '',
            text: res.data.msg,
            icon: 'warning',
            button: 'OK',
          }) 
          } else {
            window.location.href = "/";
          }
        });
      } else{
        swal({
            title: '',
            text: 'Password and Confirm Password have to be matching',
            icon: 'warning',
            button: 'OK',
          })
      }
    } else {
      swal({
          title: '',
          text: 'You have to fill all Inputs to sign Up',
          icon: 'warning',
          button: 'OK',
        })
    }
  };
  return (
    <li className="nav-list-item" ref={signUpRef}>
      <button onClick={handleForm} type="submit" className="nav-item btn">
        Sign Up
      </button>
      {showForm && (
       <SignUpForm userData ={userData} setUserData ={setUserData} sendData={sendData}/>
      )}
    </li>
  );
};

export default SignUp;
