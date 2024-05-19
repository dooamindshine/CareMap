import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Signin from "pages/signin";
import Signup from "pages/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
