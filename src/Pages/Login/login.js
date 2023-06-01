import React from "react";
import "./login.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState(""); // Add password state
  const formData = JSON.parse(localStorage.getItem("form"));

  const navigate = useNavigate();

  const handleClick = () => {
    const user = formData.find(
      (element) =>
        (element.email === userName || element.phone === userName) &&
        element.password === password
    );
  
    if (user) {
      localStorage.setItem("login", true);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("Incorrect username or password");
    }
  };
  
  return (
    <div className="login-container">
      <span className="icon">
        <BsTwitter />
      </span>

      <h1>Sign in to Twitter</h1>

      <button className="google-btn">
        <FcGoogle />
        Sign in with Google
      </button>

      <button className="apple-btn">
        <BsApple />
        Sign in with Apple
      </button>

      <h3>or</h3>

      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder=" Phone or email "
      />

      {/* Add password input field */}
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />

      <button className="next-btn" onClick={handleClick}>
        Next
      </button>

      <button className="forgot-btn">Forgot password?</button>
      <p>
        Don't have an account? <Link to="/signUP">Sign up</Link>
      </p>
    </div>
  );
}
