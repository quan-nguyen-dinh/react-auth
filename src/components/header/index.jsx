import { useRef } from "react";
import "./style.css";
import LogoSrc from "../../components/img/logo.png";
import UserSrc from "../../components/img/user.png";
import { Link, useNavigate } from "react-router-dom";
import NotifyIcon from "../icons/NotifyIcon";
import LanguageIcon from "../icons/LanguageIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function Header() {
  const [user] = useAuthState(auth);
  console.log("user header : ", user);
  const isAuth = useRef(localStorage.getItem("isAuth") | user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className="border-bottom">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand me-5">
              <img src={LogoSrc} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-md-1 px-xl-3">
                  <Link
                    to="/"
                    className="nav-link text-black"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-md-1 px-xl-3">
                  <Link
                    to="/categories"
                    className="nav-link text-black"
                    href="#"
                  >
                    Categories
                  </Link>
                </li>
                <li className="nav-item px-md-1 px-xl-3">
                  <Link className="nav-link text-black" href="#">
                    Library
                  </Link>
                </li>
                <li className="nav-item px-md-1 px-xl-3">
                  <Link to="/about" className="nav-link text-black" href="#">
                    About
                  </Link>
                </li>

                <li className="nav-item px-md-1 px-xl-3">
                  <Link to="/contact" className="nav-link text-black" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
              {user ? (
                <div className="d-flex align-items-center">
                  <NotifyIcon clx="me-4" />
                  <LanguageIcon clx="me-4" />
                  <div className="dropdown">
                    <img
                      src={UserSrc}
                      alt="user-avatar"
                      className="btn dropdown-toggle"
                      id="dropdownMenuUser"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuUser"
                    >
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <p
                          className="dropdown-item cursor-pointer"
                          onClick={handleLogout}
                        >
                          Logout
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/signup">
                    <button className="btn rounded-5 btn-outline-secondary-custom btn-header me-4">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn rounded-5 btn-primary-custom btn-header">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
