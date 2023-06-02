import React, { useState } from "react";
import Styles from "./Create.module.css";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { updateLoginStatus } from "./loginStatusSlice";

export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    password: "",
    islogin: false,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const newdata = localStorage.getItem("form")
    ? JSON.parse(localStorage.getItem("form"))
    : [];

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!form.phone.trim()) {
      errors.phone = "Phone is required.";
    }
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    }

    if (!form.dob) {
      errors.dob = "Date of Birth is required.";
    }
    if (!form.password.trim()) {
      errors.password = "Password is required.";
    } else if (form.password.length < 8) {
      errors.password = "Password should be at least 8 characters long.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("form", JSON.stringify([...newdata, form]));
      console.log(form);
      setErrors({});
      window.alert("Data stored successfully!");
      navigate("/login"); // Redirect to the login page after successful submission
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className={Styles.CreateAccount}>
        <div className={Styles.HiX}>
          <HiX size={40} />
        </div>
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inname}>
            <label>
              <input
                className={Styles.input}
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={changeHandler}
              />
              <input
                className={Styles.input}
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
              {errors.name}
              {errors.password} {/* Display password errors */}
            </label>
          </div>
          <div className={Styles.inphone}>
            <label>
              <input
                className={Styles.input}
                type="text"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={changeHandler}
                required
              />
              {errors.phone}
            </label>
          </div>
          <div className={Styles.inemail}>
            <label className={Styles.emaillabel}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={changeHandler}
                className={Styles.input}
              />
              {errors.email}
            </label>
          </div>

          <div className={Styles.Date_content}>
            <h3>Date of birth</h3>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </div>
          <div className={Styles.indate}>
            <label>
              <input
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={form.dob}
                onChange={changeHandler}
                className={Styles.Date}
              />
              {errors.dob}
            </label>
          </div>

          <div className={Styles.btnbox}>
            <button className={Styles.btn} type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
