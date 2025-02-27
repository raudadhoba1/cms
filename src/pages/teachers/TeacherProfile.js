import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

const TeacherProfile = () => {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    organization: '',
    email: '',
    phoneNumber: '',
  });

  // Get teacher's data from local storage or API
  useEffect(() => {
    // Assuming the teacher's data is stored in localStorage
    const teacherInfo = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      role: localStorage.getItem('role'),
      organization: localStorage.getItem('organization'),
      email: localStorage.getItem('email'), // assuming email is saved
      phoneNumber: localStorage.getItem('phoneNumber'), // assuming phone number is saved
    };

    setTeacherData(teacherInfo);
  }, []);

  const handleEditProfile = () => {
    // Logic for editing profile (if needed)
    // You could show an edit form or redirect to a separate "Edit Profile" page
    console.log('Edit Profile clicked');
  };

  return (
    <div
      className="profile-page"
      style={{
        backgroundColor: '#f4f4f4',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Teacher Profile</h2>
      <div
        className="profile-header"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <FaUserCircle size={100} style={{ color: '#4e73df' }} />
      </div>

      <div className="profile-info">
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Full Name: </strong> {teacherData.firstName} {teacherData.lastName}
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Role: </strong> {teacherData.role}
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Organization: </strong> {teacherData.organization}
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Email: </strong> {teacherData.email}
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Phone Number: </strong> {teacherData.phoneNumber}
        </div>
      </div>
      
      </div>
   
  );
};

export default TeacherProfile;
