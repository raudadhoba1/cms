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
        <Route path="/MarkAtt" element={<MarkAtt />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        <Route path="/TeacherProfile" element={<TeacherProfile />} />
        <Route path="/ViewAttendance" element={<ViewAttendance />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/LeaveRequest" element={<LeaveRequest />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/ClassMngt" element={<ClassMngt/>} />
        <Route path="/FacultyMngt" element={<FacultyMngt />} />
        <Route path="/StudentMngt" element={<StudentMngt />} />

      </Routes>
    </Router>
  );
}

export default App;