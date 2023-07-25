import React from "react";
import SingUpSrc from "../../components/img/SignUp.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom">
      <div className="row w-100 m-custom-0 my-sm-5-custom">
        <div className="col-md-6">
          <div className="h-100 d-flex align-items-center pe-5 p-sm-0-custom pb-sm-5-custom">
            <img className="w-100" src={SingUpSrc} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="w-50 mx-auto my-auto w-xl-100">
            <h4 className="text-center fw-bold">Sign Up</h4>
            <div className="mt-4 mb-5">
              <div className="mb-3">
                <label for="fullName" className="form-label fw-bold">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label for="re-enterPassword" className="form-label fw-bold">
                  Re-enter your password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter your password"
                />
              </div>
            </div>
            <button className="rounded-5 mb-2 w-100 py-2 btn-primary-custom btn">
              Login
            </button>
            <div className="mt-4 text-center">
              <p className=" text-center">Already have an account?</p>
              <Link to="/" className="text-black text-decoration-none">
              <button className="btn rounded-5 p-2 bg btn-outline-secondary-custom">
                Sign in
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
