import React from 'react';
import KeyIcon from '../../components/icons/KeyIcon'
import NewPasswordSrc from '../../components/img/NewPassword.png'
import BackIcon from '../../components/icons/BackIcon'

export default function NewPassword() {
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom">
    <div className="row w-100 m-custom-0 my-sm-5-custom m-sm-0-custom">
      <div className="col-xl-3 col-lg-5 col-md-6">
        <div className="text-center mb-4">
          <KeyIcon />
        </div>
        <h3 className="fw-bold mb-4">Reset your password</h3>
        <p>Reset new password, the new password needs at least 8 characters, 1 uppercase.</p>
        <div className="my-4">
          <div className="mb-3">
            <label for="password" className="form-label fw-bold">
                Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password."
            />
          </div>
          <div className="mb-3">
            <label for="re-enter-password" className="form-label fw-bold">
            Re-enter your password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter"
            />
          </div>
        </div>

        <button className="rounded-5 w-100 py-2 btn-primary-custom btn">
          Submit
        </button>
        <button className="rounded-5 w-100 py-2 btn btn-outline-secondary-custom my-3 text-secondary-custom">
          <BackIcon classNames={"me-2"} /> Back to Login
        </button>
      </div>
      <div className="col-xl-9 col-lg-7 col-md-6 text-center">
        <div className="w-50 w-xl-100 h-100 mx-auto d-flex align-items-center my-sm-5-custom">
          <img className="w-100" src={NewPasswordSrc} alt="" />
        </div>
      </div>
    </div>
  </div> 
  )
}

