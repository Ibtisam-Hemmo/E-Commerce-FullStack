import React, { useState, useRef, useEffect } from 'react';
import Axios from 'axios';

const signUp = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    img: '',
    password: '',
    confirmPassword: '',
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

      document.addEventListener('click', handleSignUpShow);

      return () => {
        document.removeEventListener('click', handleSignUpShow);
      };
    });

    return signUpRef;
  };
  const signUpRef = useClickOutside(() => setShowForm(false));
  const sendData = (e) => {
    e.preventDefault();
    Axios.post('/api/v1/users/signup', userData).then((res) => {
      if (res.data.msg) {
        console.log(res.data.msg);
      } else {
        window.location.href = '/';
      }
    });
  };
  return (
    <div ref={signUpRef}>
      <button onClick={handleForm} type="submit">
        Sign Up
      </button>
      {showForm && (
      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            type="text"
            name="image"
            value={userData.img}
            onChange={(e) => setUserData((prev) => ({ ...prev, img: e.target.value }))}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          />
        </label>
        <label htmlFor="confirmPassword">
          confirmPassword:
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) => setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          />
        </label>
        <button type="submit" onClick={sendData}>Submit</button>

      </form>
      )}
    </div>
  );
};

export default signUp;
