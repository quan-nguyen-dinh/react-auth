import React from "react";
import Bg1Src from "../../components/img/contact/bg.png";
import './style.css';

export default function Contact() {
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-md-7  bg-reactangle d-flex aligns-item-center justify-content-center py-lg-5 py-md-4">
          <div className="w-100 w-sm-100 p-4 p-lg-5 d-flex align-items-center">
            <img className="w-100" src={Bg1Src} alt="" />
          </div>
        </div>
        <div className="col-md-5  d-flex align-items-center justify-content-center">
          <div className=" w-50 w-lg-75 mt-4 mt-xl-5">
            <div className="mb-4">
              <label for="email" className="form-label">
                Email 
              </label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="example@xyz.com"
              />
            </div>
            <div className="mb-4">
              <label for="fullname" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label for="object" className="form-label">
                Object
                </label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="What is your object?"
              />
            </div>
            <div className="mb-4">
              <label for="Message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control rounded-3"
                rows="4"
                placeholder="Type your message here"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-map"></div>
    </div>
  );
}
