import React from "react";
import clgLogo from "./images/college-logo.png";
import clgPic from "./images/college-campus.png";

const HomePage = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const heroSectionStyle = {
    width: "100vw",
    height: "70vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${clgPic})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Aligns content to the top
    justifyContent: "flex-start", // Pushes content to the top
    textAlign: "left",
    padding: "60px 100px", // Adds spacing from top and left
  };

  const footerStyle = {
    padding: "40px 0 0 0", // Removes bottom padding, keeps top padding
    marginTop: "auto",
    backgroundColor: "#212529", // Same as Bootstrap's "bg-dark"
    color: "white",
  };
  

  return (
    <div style={containerStyle}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/" aria-label="Go to Home Page">
            <img src={clgLogo} alt="College Logo" height="40" /> Pillai HOC
            College of Arts, Science & Commerce
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary nav-link text-white"
                  href="/login"
                  role="button"
                >
                  Enter into Portal
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      {/* Hero Section */}
      <div
        style={heroSectionStyle}
        className="d-flex flex-column align-items-center text-center justify-content-center"
      >
        <div style={{ width: "100%", paddingTop: "40px" }}>
          <h1>Welcome to Student Attendance Monitoring System!</h1>
          <p>A comprehensive portal for Attendance Management.</p>
          <a href="/login" className="btn btn-warning mt-3">
            Login To Your Portal!
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <div className="container">
          <div className="row">
            {/* Contact Information - 1/3 Width */}
            <div className="col-md-4">
              <h5>Pillai HOCL Educational Campus</h5>
              <p>
                Rasayani, Taluka Khalapur <br />
                Dist. Raigad – 410207 MAH, India
              </p>
              <p>
                <strong>Email:</strong> <br />
                <a href="mailto:latakm@mes.ac.in" style={{ color: "white" }}>
                  latakm@mes.ac.in
                </a>{" "}
                <br />
                <a href="mailto:phcasc@mes.ac.in" style={{ color: "white" }}>
                  phcasc@mes.ac.in
                </a>
              </p>
            </div>

            {/* Quick Links - 1/3 Width */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about" style={{ color: "white" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" style={{ color: "white" }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#privacy" style={{ color: "white" }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional Contact - 1/3 Width */}
            <div className="col-md-4 text-md-end">
              <h5>Contact PieCoderz</h5>
              <p>Email: raudadhoba@gmail.com</p>
            </div>

            <div className="text-center mt-4">
              <p>
                Made with <span style={{ color: "red" }}>❤️</span> by{" "}
                <strong>PieCoderz</strong>
              </p>
            </div>
          </div>


                
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
