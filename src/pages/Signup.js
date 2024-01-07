import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <form className="shadow rounded-3 box-area p-3 col-md-5">
        <div className="header-text mb-4 text-center">
          <h2>Sign up</h2>
          <p>Create your account</p>
        </div>
        <div className="mb-3">
          <input
            placeholder="Username"
            type="username"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Email address"
            type="email"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
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
              I read and agree to <Link to="#">Term and Condition</Link>
            </label>
          </div>
        </div>
        <div className="mb-3">
          <Link>
            <button type="submit" className="w-100 btn btn-primary">
              Sign up
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
            Already't have account? <Link to="/login">Login</Link>{" "}
          </small>
        </div>
      </form>
    </div>
  );
}
