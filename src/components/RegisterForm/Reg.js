import "./register.css";
import React, { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";
function Reg() {
  const { message, handleFieldChange, fields, handleSubmit } =
    useContext(DataContext);
  console.log(fields);
  return (
    <>
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="input-title"
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="username">username</label>
            <input
              type="text"
              className="input-title"
              id="username"
              name="username"
              value={fields.username}
              onChange={handleFieldChange}
              placeholder="Enter username"
              required
            />
            <input
              type="email"
              className="input-title"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Enter email address"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input-title"
              id="password"
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
              placeholder="Create Password"
              required
            ></input>

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              className="form_control input-title"
              id="confirmPassword"
              data-testid="confirmPassword"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
              placeholder="Confirm Password"
              required
            ></input>

            <button
              type="submit"
              className="button-primary btn btn-primary"
              data-testid="submitbutton"
            >
              Create account
            </button>
            {/* <Alert message={alert.message} success={alert.isSuccess} /> */}
          </form>
        </div>

        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </>
  );
}

export default Reg;
