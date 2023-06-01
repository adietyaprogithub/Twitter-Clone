import CreateAccount from "./Pages/Create account/Createaccount";
import { Login } from "./Pages/Login/login";
import { SignUp } from "./Pages/SignUp/signUp";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
import { MainHomePage } from "./components/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainHomePage />} />
        <Route exact path="/Createaccount" element={<CreateAccount />}/>
        <Route path="/signUP" element={<SignUp />} />
      
      </Routes>

      {/* <Home/> */}

      {/* <CreateAccount/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}

      {/* <Data/> */}
      {/* <CreateAccount/> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
