import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <form className="shadow rounded-3 box-area p-3 col-md-5">
        <div className="header-text mb-4">
          <h4>Hello, Again</h4>
          <p>We are happy to have you back</p>
        </div>
        <div className="mb-3">
          {/* <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label> */}
          <input
            placeholder="Email address"
            type="email"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label> */}
          <input
            placeholder="Password"
            type="password"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              placeholder="Password"
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="forgot">
            <small>
              <Link to="#">Forgot Password?</Link>
            </small>
          </div>
        </div>
        <div className="mb-3">
          <Link>
            <button type="submit" className="w-100 btn btn-primary">
              Login
            </button>
          </Link>
        </div>
        <div className="">
          <Link>
            <button type="submit" className="w-100 btn btn-light">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                style={{ width: "25px" }}
                alt=""
                className="me-2"
              />
              <small>Sign In with Google</small>
            </button>
          </Link>
        </div>
        <div>
          <small>
            Don't have account? <Link to="/signup">Sign Up</Link>{" "}
          </small>
        </div>
      </form>
    </div>
  );
}
