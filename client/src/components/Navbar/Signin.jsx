import React, { useState, useRef, useEffect } from 'react';
import Axios from 'axios';

function SignIn() {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleForm = (event) => {
        if (ref.current && !ref.current.contains(event.target)) callback();
      };
      document.addEventListener('click', handleForm);

      return () => document.removeEventListener('click', handleForm);
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
    Axios.post('/api/v1/users/signin', userData).then((res) => {
      if (res.data.msg) {
        console.log(res.data.msg);
      } else {
        window.location.href = '/';
      }
    });
  };

  return (
    <div ref={ref}>
      <button onClick={handleForm} type="submit"> Sign In</button>
      {
            showForm
                && (
                <form action="">
                  <input
                    value={userData.email}
                    onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                    type="text"
                  />
                  <input
                    value={userData.password}
                    onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                    type="password"
                  />
                  <button type="submit" onClick={(e) => { sendData(e); }}>Submit</button>
                </form>
                )
            }
    </div>
  );
}

export default SignIn;
