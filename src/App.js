import CreateAccount from "./Pages/Create account/Createaccount";
import SignUp from "./Pages/SignUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Createaccount" element={<CreateAccount />} />
          <Route path="/Createaccount/signUP" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* <Data/> */}
      {/* <CreateAccount/> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
