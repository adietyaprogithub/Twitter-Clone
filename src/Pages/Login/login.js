import React from "react";
import Styles from "./login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../../atom";

export function Login() {
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const formData = JSON.parse(localStorage.getItem("form"));
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    const user = formData.find(
      (element) =>
        (element.email === userName ) &&
        element.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setAuth({ isAuthenticated: true });
      navigate("/home");
    } else {
      alert("Incorrect username or password");
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
        placeholder=" Enter Your email "
      />

      {/* Add password input field */}
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
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
