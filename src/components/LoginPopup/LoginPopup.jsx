import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Sign up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {current === "Login" ? null : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{current === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing i agree to the terms of use & privacy policy</p>
        </div>
        {current === "Login" ? (
          <p>
            create a new account ?{" "}
            <span onClick={() => setCurrent("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            already have an account ?{" "}
            <span onClick={() => setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
