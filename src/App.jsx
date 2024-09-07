import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import FrontPage from "./components/FrontPage";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;