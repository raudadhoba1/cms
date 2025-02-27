import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";


function ViewAttendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("Present");
  const [attendanceDetails, setAttendanceDetails] = useState([]);

  // Fetch subjects from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/subjects")
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching subjects!", error);
      });
  }, []);

  // Fetch attendance data for the selected subject
  const fetchAttendance = (subject) => {
    axios
      .get(`http://localhost:3000/api/attendance/${subject}`)
      .then((response) => {
        setAttendanceDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching attendance data!", error);
      });
  };

  // Handle attendance submission
  const handleAttendanceSubmit = (event) => {
    event.preventDefault();
    const newAttendance = {
      subject: selectedSubject,
      status: attendanceStatus,
    };

    axios
      .post("http://localhost:3000/api/attendance", newAttendance)
      .then((response) => {
        alert(response.data.message);
        fetchAttendance(selectedSubject); // Update the attendance data after submission
      })
      .catch((error) => {
        console.error("Error submitting attendance!", error);
      });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">View Attendance</h1>

      {/* Subject Selection Dropdown */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="subjectSelect">
            {/* <Form.Label>Select Subject</Form.Label> */}
            <Form.Control
              as="select"
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                fetchAttendance(e.target.value); // Fetch attendance for the selected subject
              }}
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Attendance Submission Form */}
      {selectedSubject && (
        <Row className="mb-4">
          <Col md={6}>
            <Form onSubmit={handleAttendanceSubmit}>
              <Form.Group controlId="attendanceStatus">
                <Form.Label>Attendance Status</Form.Label>
                <Form.Control
                  as="select"
                  value={attendanceStatus}
                  onChange={(e) => setAttendanceStatus(e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                 
                </Form.Control>
              </Form.Group>
              <Button variant="success" type="submit" block>
                Submit Attendance
              </Button>
            </Form>
          </Col>
        </Row>
      )}

      {/* Display Subject Attendance */}
      {selectedSubject && (
        <Row className="mt-5">
          <Col>
            <h3>Attendance History for {selectedSubject}</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceDetails.length > 0 ? (
                  attendanceDetails.map((entry) => (
                    <tr key={entry.date}>
                      <td>{new Date(entry.date).toLocaleDateString()}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No attendance data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
      <Button variant="primary" type="submit" block>
                Submit 
              </Button>
    </Container>
  );
}

export default ViewAttendance;
