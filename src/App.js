import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Authenticatin/SignIn/SignIn.jsx";
import SignUp from "./components/Authenticatin/SignUp/SignUp.jsx";

const App = () => {
  return (
    <Router>
      <div className=" d-flex  justify-content-center  align-items-center ">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
