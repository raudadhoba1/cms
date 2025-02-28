import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import AdminDashboard from './pages/admin/AdminDashboard';
import MarkAtt from "./pages/teachers/MarkAtt";
import TeacherDashboard from "./pages/teachers/TeacherDashboard";

const MainPage = () => {
  // State declarations
  const [sidebarContent, setSidebarContent] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [activeComponent, setActiveComponent] = useState('teacher-dashboard');

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
        return <TeacherDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  const handleSidebarClick = (item) => {
    setSelectedItem(item);
    if (item.permissions === 'Mark Attendance') {
      setActiveComponent('mark-attendance');
    } else {
      setActiveComponent(`${role}-dashboard`);
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
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                onClick={() => handleSidebarClick(item)}
              >
                {isSidebarExpanded ? (
                  item.permissions
                ) : (
                  <img src={item.icon_url} alt={item.permissions} style={{ width: '20px' }} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div
          className="main-page"
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: 'white',
            color: 'black',
            overflowY: 'auto',
            paddingTop: '60px',
          }}
        >
          {showProfile ? (
            <StudentProfile name={name} role={role} />
          ) : (
            <>
              {activeComponent === 'mark-attendance' ? (
                <MarkAtt />
              ) : (
                renderDashboard()
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;