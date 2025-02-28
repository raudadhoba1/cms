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
        <Route path="/MarkAtt" element={<MarkAtt />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        <Route path="/TeacherProfile" element={<TeacherProfile />} />
        <Route path="/ViewAttendance" element={<ViewAttendance />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/LeaveRequest" element={<LeaveRequest />} />

      </Routes>
    </Router>
  );
}

export default App;