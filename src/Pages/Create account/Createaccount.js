import "./Create.module.css"
import React, { useState } from "react";
import Styles from "./Create.module.css";
import TextField from "@mui/material/TextField";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/signUp";
export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
  });

  const newdata = localStorage.getItem("form")
    ? JSON.parse(localStorage.getItem("form"))
    : [];

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});
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

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("form", JSON.stringify([...newdata, form]));
      console.log(form);
      setErrors({});
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
        <h1>Create Yourrr Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inname}>
            <label>
              <input
                className={Styles.inputname}
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={changeHandler}
              />
              {/* <TextField
                
                id="outlined-basic"
                label="name"
                variant="outlined"
                value={form.name}
                required
                size="larger"
                onChange={changeHandler}
              /> */}
              {errors.name}
            </label>
          </div>
          <br />
          <div className={Styles.inphone}>
            <label>
              <input
                className={Styles.inputphone}
                type="text"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={changeHandler}
                required
              />
              {/* <TextField
                className={Styles.inputphone}
                id="outlined-basic"
                type="text"
                label="Phone"
                variant="outlined"
                value={form.phone}
                onChange={changeHandler}
                
              /> */}
              {errors.phone}
            </label>
          </div>
          <br />
          <div className={Styles.inemail}>
            <label className={Styles.emaillabel}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={changeHandler}
                className={Styles.inputemail}
              />
              {/* <TextField
                className={Styles.inputemail}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={form.email}
                onChange={changeHandler}
                required
              /> */}
              {errors.email}
            </label>
          </div>

          <br />

          <div className={Styles.Date_content}>
            <h3>Date of birth</h3>
            <br />
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

              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label='select-date' value={date} onChange={(newValue)=>setvalue(newValue)} renderinput={(props)=><TextField {...props}/>}/>
          </LocalizationProvider> */}
              {errors.dob}
            </label>
          </div>
          <br />

          <Link to ='signUP/'>
          <button className={Styles.btn} type="submit">
            Next
          </button>
          </Link>
        </form>
      </div>
    </>
  );
}
