import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import CreateAccount from "./Pages/Create account/Createaccount";
import { Login } from "./Pages/Login/login";
import { SignUp } from "./Pages/SignUp/signUp";
import Home from "./components/Home/Home";
import { MainHomePage } from "./components/MainHome/MainHome";
import { authAtom } from "./atom";

function ProtectedRoute() {
  const { isAuthenticated } = useRecoilValue(authAtom);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route path='/home' element={Home} />;
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/Createaccount" element={<CreateAccount />} />
          <Route path="/signUP" element={<SignUp />} />
          <Route path="/protected" element={<ProtectedRoute />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
