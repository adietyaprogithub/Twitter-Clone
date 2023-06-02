import React from "react";
import Styles from "./login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [userName, setUsername] = React.useState("");
  const formData = JSON.parse(localStorage.getItem("form"));

  const navigate = useNavigate();

  const handleClick = () => {
    const values = formData.find(
      (element) =>
        element.name === userName ||
        element.email === userName ||
        element.phone === userName
    );

    if (values) {
      localStorage.setItem("login", true);
      localStorage.setItem("loggedInUser", JSON.stringify(values));  // srore the data of the user 
      navigate("/Home");
    } else {
      alert("plese Enter Correct Info");
    }
  };

  return (
    <div className={Styles.login_container}>
      <span className={Styles.icon}>
        <BsTwitter />
      </span>

      <h1 className={Styles.header}>Sign in to Twitter</h1>

      <button className={Styles.google_btn}>
        <FcGoogle />
        Sign in with Google
      </button>

      <button className={Styles.apple_btn}>
        <BsApple />
        Sign in with Apple
      </button>

      <h3>or</h3>

      <input
      className={Styles.input}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Phone, email, or username"
      />
   <div>
      <button className={Styles.next_btn} onClick={handleClick}>
        Next
      </button>
      </div>
      <div>
      <button className={Styles.forgot_btn}>Forgot password?</button>
      </div>
      <p>
        Don't have an account? <Link to="/signUP">Sign up</Link>
      </p>
    </div>
  );
}
