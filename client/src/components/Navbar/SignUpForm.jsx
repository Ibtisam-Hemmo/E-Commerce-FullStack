import React from "react";

function SignUpForm({ userData, setUserData, sendData }) {
  return (
    <div className="login-form signup">
      <form action="">
        <h3 className="title">Sign Up Form</h3>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope"/>
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-key"/>
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope"/>
          </span>
          <input
            className="form-control"
            placeholder="Enter Your image"
            type="text"
            name="image"
            value={userData.img}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, img: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope"/>
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope"/>
          </span>
          <input
            className="form-control"
            placeholder="Confirm Your Password"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>
      </form>

      <button
        className="btn"
        id="loginButton"
        type="submit"
        onClick={(e) => sendData(e)}
      >
        Submit
      </button>
    </div>
  );
}

export default SignUpForm;
