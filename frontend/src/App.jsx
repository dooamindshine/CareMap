import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Signin from "pages/signin";
import Signup from "pages/signup";
import Maphome from "pages/maphome";
import Profile from "pages/profile";
import Navbar from "components/menu/NavBar";

function App() {
  return (
    <>
      <Router>
      <Navbar/>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/maphome" element={<Maphome />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
