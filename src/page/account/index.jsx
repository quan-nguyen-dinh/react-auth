import React from "react";
import AvatarSrc from "../../components/img/avatar.png";
import AccountSrc from "../../components/img/account.png";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom ">
      <div className="row w-100 m-custom-0 my-sm-5-custom pt-5">
        <div className="col-md-6">
          <div className="w-50 mx-auto my-auto w-xl-100">
            <div className="text-center">
                <img src={AvatarSrc} alt="" />
                <p className="mt-3">8 playlists</p>
            </div>
            <div className="mt-4 mb-4">
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
                <label for="phoneNumber" className="form-label fw-bold">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="xxxx xxx xxxx"
                />
              </div>
              <div className="mb-3">
                <label for="location" className="form-label fw-bold">
                  Location
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <button className="px-5 rounded-5 btn btn-primary-custom">Save</button>
              <button className="px-5 rounded-5 btn btn-outline-secondary-custom">
                Change
              </button>
            </div>
      <p className="text-center mt-4">  <Link to='/login'  className="text-dark fst-italic">Log out</Link></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 d-flex align-items-center pe-5 p-sm-0-custom pb-sm-5-custom">
            <img className="w-100" src={AccountSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
