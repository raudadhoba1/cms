import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import AdminDashboard from './pages/admin/AdminDashboard';

const MainPage = () => {
  const [sidebarContent, setSidebarContent] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  const role = localStorage.getItem('role');
  const name = localStorage.getItem('name');

  useEffect(() => {
    if (!role) {
      navigate('/login');
      return;
    }

    const fetchPermissions = async () => {
      try {
        const response = await axios.get(`http://172.17.30.231:8080/api/permissions/${role}`);
        setSidebarContent(response.data);
        setSelectedItem(response.data[0]);
      } catch (error) {
        console.error('Error fetching sidebar content:', error);
      }
    };

    fetchPermissions();
  }, [role, navigate]);

  const renderDashboard = () => {
    switch (role) {
      case 'student':
        return <StudentDashboard />;
      case 'teacher':
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <div
        className="header d-flex align-items-center justify-content-between"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: '#282c34',
          color: 'white',
          padding: '0 2rem',
          height: '60px',
          zIndex: 1000,
        }}
      >
        <div className="d-flex align-items-center">
          <FaUserCircle
            size={30}
            style={{ cursor: 'pointer', marginRight: '10px' }}
            onClick={() => setShowProfile(!showProfile)}
          />
          <div>
            <span>{name}</span>
            <p>{role}</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, marginTop: '60px' }}>
        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}
          style={{
            width: isSidebarExpanded ? '250px' : '80px',
            backgroundColor: '#303060',
            color: 'white',
            transition: 'width 0.3s',
            overflowY: 'auto',
          }}
          onMouseEnter={() => setIsSidebarExpanded(true)}
          onMouseLeave={() => setIsSidebarExpanded(false)}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sidebarContent.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '10px',
                  backgroundColor: hoveredItemId === item.id ? '#4b5b8a' : 'transparent',
                }}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                {isSidebarExpanded ? item.permissions : <img src={item.icon_url} alt={item.permissions} style={{ width: '20px' }} />}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Page */}
        <div style={{ flex: 1, backgroundColor: '#101125', color: 'white', padding: '10px', overflowY: 'auto' }}>
          {showProfile ? <StudentProfile name={name} role={role} /> : renderDashboard()}
        </div>
      </div>
    </div>
  );
};

export default MainPage;