import React from "react";
import SuccessIcon from "../../components/icons/SuccessIcon";
import BackIcon from "../../components/icons/BackIcon";
import SuccessSrc from "../../components/img/success.png";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom">
      <div className="row w-100 m-custom-0 my-sm-5-custom m-sm-0-custom">
        <div className="col-xl-3 col-lg-5 col-md-6">
          <div className="text-center mb-4">
            <SuccessIcon />
          </div>
          <h3 className="fw-bold mb-4">Success !</h3>
          <p>Your password has changed.</p>

          <Link to="/" className="text-black text-decoration-none">
            <button className="mt-4 rounded-5 w-100 py-2 btn-primary-custom btn">
              <BackIcon classNames={"me-2"} />
              Back to Login
            </button>
          </Link>
        </div>
        <div className="col-xl-9 col-lg-7 col-md-6 text-center">
          <div className="w-50 w-xl-100 h-100 mx-auto d-flex align-items-center my-sm-5-custom">
            <img className="w-100" src={SuccessSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
