import React, { useRef } from "react";
import ForgotPasswordSRC from "../../components/img/ForgetPassword.png";
import GoogleIcon from "../../components/icons/GoogleIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import KeyIcon from "../../components/icons/KeyIcon";
import BackIcon from "../../components/icons/BackIcon";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const email = useRef("");
  const navigate = useNavigate();
  const handleConfirm = ()=>{
    if(email.current){
      navigate('/recovery-code');
    }
  }
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom">
      <div className="row w-100 m-custom-0 my-sm-5-custom m-sm-0-custom">
        <div className="col-xl-3 col-lg-5 col-md-6">
          <div className="text-center mb-4">
            <KeyIcon />
          </div>
          <h3 className="fw-bold mb-4">Forgot the password?</h3>
          <p>Please enter your email you have singed to receive code reset.</p>
          <div className="my-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                // value={email.current}
                onChange={e=>email.current = e.target.value} 
                className="form-control"
                placeholder="Type email here"
              />
            </div>
          </div>

          <button className="rounded-5 w-100 py-2 btn-primary-custom btn" onClick={handleConfirm}>
            Confirm
          </button>
          <Link to="/" className="text-black text-decoration-none">
          <button className="rounded-5 w-100 py-2 btn btn-outline-secondary-custom my-3 text-secondary-custom">
            <BackIcon classNames={"me-2"} /> Back to Login
          </button>
          </Link>
        </div>
        <div className="col-xl-9 col-lg-7 col-md-6 text-center">
          <div className="w-50 w-xl-100 h-100 mx-auto d-flex align-items-center my-sm-5-custom">
            <img className="w-100" src={ForgotPasswordSRC} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
