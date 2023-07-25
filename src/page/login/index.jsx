import React, { useContext, useEffect } from "react";
import "../../index.css";
import GoogleIcon from "../../components/icons/GoogleIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import login from "../../components/img/login.png";
import { AuthContext } from "../../context/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log('user login: ', user)
  const handleSubmit = () => {
    if (userInfo.email !== "" && userInfo.password !== "") {
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      navigate('/');
    }
  };
  useEffect(() => {
    if(user)
    navigate('/')

  }, [user])
  
  const signInWithGoogle = ()=>{
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }catch(err){
      console.log('err : ', err)
    }
  }
  return (
    <div className="container h-100 d-flex align-items-center d-sm-block-custom">
      <div className="row w-100 m-custom-0 my-sm-5-custom m-sm-0-custom">
        <div className="col-xl-9 col-lg-7 col-md-6  text-center ">
          <div className="w-50 w-xl-100 h-100 mx-auto d-flex align-items-center my-sm-5-custom">
            <img className="w-100" src={login} alt="" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-5 col-md-6  ">
          <h4 className="fw-bold text-center mb-4">Sign in</h4>
          <div className="mb-5">
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                className="form-control"
                placeholder="At least 8 character"
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rememberPassword"
                />
                <label className="form-check-label fw-bold" htmlFor="remberpassword">
                  Remeber Password
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="fst-italic text-dark fw-bold"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            className="rounded-5 w-100 py-2 btn-primary-custom btn"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="d-flex my-2 align-items-center">
            <div className="divider k w-45 h-1 bg-dark"></div>
            <span className="mx-2">Or</span>
            <div className="divider w-45 h-1 bg-dark"></div>
          </div>
          <button 
            onClick={signInWithGoogle}
          className="rounded-5 w-100 py-2 btn btn-secondary-custom mb-3 text-primary-custom">
            <GoogleIcon classNames={"me-2"} /> Login with Google
          </button>
          <button className="rounded-5 w-100  py-2 btn btn-secondary-custom text-primary-custom">
            {" "}
            <FacebookIcon classNames={"me-2"} /> Login with Facebook
          </button>
          <div className="text-center">
            <p className="mt-5 text-center">Do you have any acount?</p>
            <Link to="/signup" className="text-black text-decoration-none">
              <button className="btn rounded-5 p-2 bg btn-outline-secondary-custom">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
