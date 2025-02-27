import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
// To generate QR codes
import MarkAtt from './MarkAtt'; // Assuming you have this component already

const TeacherDashboard = () => {
  // State to handle the choice between manual attendance or QR attendance
  const [attendanceOption, setAttendanceOption] = useState(null);
  const [showTimetable, setShowTimetable] = useState(false);
  const [timetableData, setTimetableData] = useState(null); // Sample timetable data

  const navigate = useNavigate();

  // Function to handle the "Go to Attendance" button click
  const handleAttendanceClick = () => {
    setAttendanceOption('choose'); // Show the manual/QR options
  };

  // Function to handle manual attendance option
  const handleManualAttendanceClick = () => {
    setAttendanceOption('manual'); // Go to manual attendance page
  };

  // Function to handle QR attendance option
  const handleQRAttendanceClick = () => {
    setAttendanceOption('qr'); // Generate QR code for attendance
  };

  // Function to handle "Go to Classes" button click
  const handleGoToClassesClick = () => {
    setShowTimetable(true); // Show the timetable for today
    // Fetch timetable data from API (or you can use mock data here)
    const mockTimetable = [
      { time: '08:00 AM', subject: 'Math', room: '101' },
      { time: '10:00 AM', subject: 'Science', room: '102' },
      { time: '12:00 PM', subject: 'History', room: '103' },
    ];
    setTimetableData(mockTimetable); // Update timetable data
  };

  return (
    <div
      className="teacher-dashboard-wrapper"
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        className="teacher-dashboard-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '2rem',
            color: '#4e73df',
          }}
        >
          Teacher Dashboard
        </h2>

        {/* Dashboard Cards Section */}
        <div
          className="dashboard-cards"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Card 1: Attendance */}
          <div
            className="card"
            style={{
              backgroundColor: '#4e73df',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              flex: 1,
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Attendance</h3>
            <p>Mark and view student attendance</p>
            <button
              style={{
                backgroundColor: '#fff',
                color: '#4e73df',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
              onClick={handleAttendanceClick} // Go to attendance options
            >
              Go to Attendance
            </button>
          </div>

          {/* Card 2: Classes */}
          <div
            className="card"
            style={{
              backgroundColor: '#1cc88a',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              flex: 1,
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Classes</h3>
            <p>View and manage your classes</p>
            <button
              style={{
                backgroundColor: '#fff',
                color: '#1cc88a',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
              onClick={handleGoToClassesClick} // Show timetable for today
            >
              Go to Classes
            </button>
          </div>
        </div>

        {/* Attendance Options - Choose Manual or QR */}
        {attendanceOption === 'choose' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '30px',
            }}
          >
            <div
              className="card"
              style={{
                backgroundColor: '#4e73df',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                flex: 1,
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
              onClick={handleManualAttendanceClick}
            >
              <h3>Manual Attendance</h3>
              <p>Mark attendance manually</p>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: '#f39c12',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                flex: 1,
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
              onClick={handleQRAttendanceClick}
            >
              <h3>QR Attendance</h3>
              <p>Generate QR code for student attendance</p>
            </div>
          </div>
        )}

        {/* Manual Attendance Page (MarkAtt Component) */}
        {attendanceOption === 'manual' && <MarkAtt />}

        {/* QR Attendance Page (QR Code Generation) */}
        {attendanceOption === 'qr' && (
          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Scan to Mark Attendance</h3>
            <QRCodeCanvas 
              value="http://example.com/attendance?class=math&date=2025-02-27" // Replace with a dynamic URL
              size={256}
            />
            <p>Share this QR code with your students</p>
          </div>
        )}

        {/* Timetable */}
        {showTimetable && timetableData && (
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Today's Timetable</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Time</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Subject</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Room</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      {item.time}
                    </td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      {item.subject}
                    </td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      {item.room}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
