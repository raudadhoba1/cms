import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./utils/LoginPage";
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClassMngt from "./pages/admin/ClassMngt";
import FacultyMngt from "./pages/admin/FacultyMngt"
import StudentMngt from "./pages/admin/StudentMngt"

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
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/ClassMngt" element={<ClassMngt/>} />
        <Route path="/FacultyMngt" element={<FacultyMngt />} />
        <Route path="/StudentMngt" element={<StudentMngt />} />

      </Routes>
    </Router>
  );
}

export default App;