import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ClassMngt from './pages/admin/ClassMngt'; // Import Class Management
import FacultyMngt from './pages/admin/FacultyMngt'; // Import Faculty Management
import StudentMngt from './pages/admin/StudentMngt'; // Import Student Management

const MainPage = () => {
  const [sidebarContent, setSidebarContent] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const organization = localStorage.getItem('organization');

  useEffect(() => {
    if (!role) {
      navigate('/login');
      return;
    }
    const fetchPermissions = async () => {
      try {
        const response = await axios.get(`http://172.17.30.231:8080/api/permissions/${role}`);
        setSidebarContent(response.data);
        setSelectedItem(response.data[0]); // Set first item as default
      } catch (error) {
        console.error('Error fetching sidebar content:', error);
      }
    };

    fetchPermissions();
  }, [role, navigate]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, padding: 0 }}>
      {/* Header */}
      <div
        className="header d-flex align-items-center justify-content-between"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#282c34',
          color: 'white',
          padding: '0 2rem',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
          height: '60px',
          zIndex: 1000,
        }}
      >
        <h2>{organization}</h2>
        <div className="d-flex align-items-center">
          <FaUserCircle size={30} style={{ marginRight: '10px' }} />
          <div className="text-left">
            <span className="d-block" style={{ fontSize: '1rem' }}>
              {firstName} {lastName}
            </span>
            <p className="mb-0" style={{ fontSize: '0.5rem' }}>
              {role}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, marginTop: '60px' }}>
        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}
          style={{
            width: isSidebarExpanded ? '250px' : '80px',
            transition: 'width 0.3s',
            backgroundColor: '#303060',
            height: 'calc(100vh - 60px)',
            color: 'white',
            overflowY: 'auto',
            position: 'relative',
          }}
          onMouseEnter={() => setIsSidebarExpanded(true)}
          onMouseLeave={() => setIsSidebarExpanded(false)}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sidebarContent.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: hoveredItemId === item.id ? '#4b5b8a' : 'transparent',
                }}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                onClick={() => handleItemClick(item)}
              >
                {isSidebarExpanded || hoveredItemId === item.id ? (
                  <>
                    <img
                      src={item.icon_url}
                      alt={item.permissions}
                      style={{ width: '20px', height: '20px', marginRight: '10px' }}
                    />
                    <span>{item.permissions}</span>
                  </>
                ) : (
                  <img src={item.icon_url} alt={item.permissions} style={{ width: '20px', height: '20px' }} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div
          className="main-page"
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#101125',
            color: '#ffffff',
            overflowY: 'auto',
            paddingTop: '60px',
          }}
        >
          {selectedItem?.permissions === 'Manage Courses & Subjects' ? (
            <ClassMngt />
          ) : selectedItem?.permissions === 'Manage Faculty' ? (
            <FacultyMngt />
          ) : selectedItem?.permissions === 'Manage Students' ? (
            <StudentMngt />
          ) : (
            <>
              <h1>{selectedItem?.permissions || 'Main Page'}</h1>
              <p>Content related to "{selectedItem?.permissions}" goes here.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
