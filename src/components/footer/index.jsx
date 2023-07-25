import React from "react";
import LogoSrc from "../../components/img/logo.png";
import FacebookIcon from "../icons/FacebookIcon";
import FacebookDarkIcon from "../icons/FacebookDarkIcon";
import Twitch from "../icons/Twitch";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="border-top pt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-xl-3 col-sm-6 mb-xl-5-custom">
            <h4>Navigation</h4>
            <ul className="reset-ul p-0">
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  Home
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  Library
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  About
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  Contact
                </a>
              </li>
            </ul>
            <div className="logo mt-lg-5 mt-4 mb-4">
              <img src={LogoSrc} alt="" />
            </div>
            <div className="social d-flex align-items-center">
              <span className="me-4">
                <FacebookDarkIcon />
              </span>
              <span className="me-4">
                <Twitch />
              </span>
              <span className="me-4">
                <TwitterIcon />
              </span>
              <span className="me-4">
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-5-custom">
            <h4>Q&A</h4>
            <ul className="reset-ul p-0">
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  Is This Website Risk ?
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  How Does This Website Work ?
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  Can I Donate This Web ?{" "}
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-decoration-none text-black ">
                  How Many Downloads Do I Have ?
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-5-custom">
            <h4>Information</h4>
            <ul className="reset-ul p-0">
              <li className="my-3">
                Address: 2900 Ritter Street, Huntsville, AL 35802
              </li>
              <li className="my-3">Phone Number: (636) 296-7838</li>
              <li className="my-3">Email:catalogebook@gmail.com</li>
              <li className="my-3">Website:catalog.com</li>
            </ul>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-5-custom">
            <h4>Newsletter</h4>
            <p className="mt-3 pe-4">
              Subscribe for newsletter from this website to get updates and
              notifications.
            </p>
            <div className="input-group mt-5 rounded-5">
              <input
                type="text"
                className="form-control py-3 rounded-ys-4 "
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button className=" text-primary-custom rounded-ye-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-center py-4">
          Copyright @20239 All Rights Reserved | Designed by Mai Quang Dinh
        </p>
      </div>
    </footer>
  );
}
