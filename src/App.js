import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./Pages/Create account/Createaccount";
import { Login } from "./Pages/Login/login";
import { SignUp } from "./Pages/SignUp/signUp";

import Home from "./components/Home/Home";
import { MainHomePage } from "./components/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainHomePage />} />
        <Route exact path="/Createaccount" element={<CreateAccount />} />
        <Route path="/signUP" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;