import CreateAccount from "./Pages/Create account/Createaccount";
import { Login } from "./Pages/Login/login";
import {SignUp} from "./Pages/SignUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/Createaccount" element={<CreateAccount/>} />
          <Route path="/signUP" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>

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
