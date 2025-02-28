import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./utils/LoginPage";
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import MarkAtt from "./pages/teachers/MarkAtt";
import TeacherDashboard from "./pages/teachers/TeacherDashboard";
import TeacherProfile from "./pages/teachers/TeacherProfile";
import ViewAttendance from "./pages/student/ViewAttendance";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import LeaveRequest from "./pages/student/LeaveRequest";


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
        <Route path="/MarkAtt" element={<MainPage />} />
        <Route path="/TeacherDashboard" element={<MainPage />} />
        <Route path="/TeacherProfile" element={<MainPage />} />
        <Route path="/ViewAttendance" element={<MainPage />} />
        <Route path="/StudentDashboard" element={<MainPage />} />
        <Route path="/StudentProfile" element={<MainPage />} />
        <Route path="/LeaveRequest" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;