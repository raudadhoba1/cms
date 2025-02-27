import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const LeaveRequest = ({ studentId }) => {
  const [leaveDate, setLeaveDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    try {
      const response = await axios.get(`/api/leave-requests/${studentId}`);
      setLeaveRequests(response.data);
    } catch (error) {
      console.error("Error fetching leave requests", error);
    }
  };

  const handleLeaveRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/request-leave", {
        student_id: studentId,
        leave_date: leaveDate,
        leave_reason: reason,
      });
      toast.success("Leave request submitted successfully");
      fetchLeaveRequests();
      setLeaveDate("");
      setReason("");
    } catch (error) {
      toast.error("Failed to submit leave request");
    }
  };

  return (
    <Card className="p-4 bg-light">
      <h2 className="text-primary mb-4">Leave Request</h2>
      <Form onSubmit={handleLeaveRequest}>
        <Form.Group className="mb-3">
          <Form.Label>Leave Date</Form.Label>
          <Form.Control
            type="date"
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Reason for Leave</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Request
        </Button>
      </Form>

      <div className="mt-4">
        <h3 className="text-primary">Your Leave Requests</h3>
        {leaveRequests.map((request) => (
          <Card key={request.id} className="mb-3 p-3">
            <Card.Body>
              <p>Date: {request.leave_date}</p>
              <p>Reason: {request.leave_reason}</p>
              <p>Status: <span className={request.status === 'Approved' ? 'text-success' : request.status === 'Denied' ? 'text-danger' : 'text-warning'}>{request.status}</span></p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default LeaveRequest;
