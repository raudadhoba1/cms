import React from 'react';
import kleLogo from './images/kle_logo.png';
import collgePic from './images/college.jpg';

const HomePage = () => {

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const heroSectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${collgePic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    textAlign: 'center',
  };

  const featureCardStyle = {
    textAlign: 'center',
    padding: '30px',
    transition: 'transform 0.3s ease-in-out',
  };

  const handleHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const footerStyle = {
    padding: '40px 0',
    marginTop: 'auto',
    backgroundColor: '#343a40',
    color: 'white',
  };

  return (
    <>
      <div style={containerStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/" aria-label="Go to Home Page">
              <img src={kleLogo} alt="College Logo" height="40" />
              CMS
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary nav-link text-white" href="/login" role="button">
                    Enter into Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div style={heroSectionStyle} className="d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <h1>Welcome to College Management System</h1>
            <p>A comprehensive portal for College Administration</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="feature-card"
                style={featureCardStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <i className="bi bi-calendar-check" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                <h4>Attendance Management</h4>
                <p>Track and manage attendance records efficiently</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="feature-card"
                style={featureCardStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <i className="bi bi-graph-up" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                <h4>Results & Grades</h4>
                <p>Access academic performance and results</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="feature-card"
                style={featureCardStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <i className="bi bi-book" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                <h4>Library Management</h4>
                <p>Digital library access and book management</p>
              </div>
            </div>
          </div>
        </div>

        <footer style={footerStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>Contact Us</h5>
                <p>Email: info@college.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="col-md-6 text-md-end">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#about" style={{ color: 'white' }}>About Us</a></li>
                  <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
                  <li><a href="#privacy" style={{ color: 'white' }}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
