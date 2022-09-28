import React from "react";

function SignInForm({ userData, setUserData, sendData }) {
  return (
    <div className="login-form">
      <form action="">
        <h3 className="title">Login Form</h3>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope" />
          </span>
          <input
            className="form-control"
            placeholder="Enter email"
            id="emaillogin"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-key" />
          </span>
          <input
            className="form-control"
            placeholder="Enter password"
            id="passwordlogin"
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
          />
        </div>
      </form>

      <button
        className="btn"
        id="loginButton"
        type="submit"
        onClick={(e) => {
          sendData(e);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default SignInForm;
