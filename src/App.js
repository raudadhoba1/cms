import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./utils/LoginPage";
import HomePage from "./HomePage";
import MainPage from "./MainPage";


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<MainPage />} />
        <Route path="/teacher" element={<MainPage />} />
        <Route path="/student" element={<MainPage />} />
        <Route path="/librarian" element={<MainPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;