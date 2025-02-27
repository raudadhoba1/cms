import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { FaUser, FaClock, FaCalendar, FaEnvelope, FaPhone } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const presentDays = 13; // Total Present Days
const absentDays = 2;   // Total Absent Days
const totalDays = presentDays + absentDays;

// Calculate Percentage
const attendanceRate = Math.round((presentDays / totalDays) * 100);

const data = {
  labels: ['Present', 'Absent'],
  datasets: [
    {
      label: 'Days',
      data: [presentDays, absentDays],
      backgroundColor: ['#6f42c1', '#ef4444'], // Purple + Red Colors
    },
  ],
};

export default function StudentDashboard() {
  return (
    <div className="d-flex min-vh-100 bg-light">
      
      <main className="flex-grow-1 p-4">
        <h1 className="mb-4 text-black">Student Details</h1>

        {/* Summary Cards */}
        <div className="d-flex gap-4">
          {/* Attendance Rate Card */}
          <Card style={{ width: '50%' }} className="shadow">
            <Card.Body>
              <h5>Attendance Rate</h5>
              <h2 className="text-purple">{attendanceRate}%</h2>
              <ProgressBar now={attendanceRate} className="mt-3 bg-purple" />
            </Card.Body>
          </Card>

          {/* Bar Chart Summary */}
          <Card style={{ width: '50%' }} className="shadow">
            <Card.Body>
              <h5>Summary</h5>
              <Bar data={data} />
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
}
