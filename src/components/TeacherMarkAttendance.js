import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const TeacherMarkAttendance = () => {
    const [date, setDate] = useState('');
    const [timetable, setTimetable] = useState([]);
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bulkStatus, setBulkStatus] = useState(''); // Track bulk status: 'Present' or 'Absent'
    const [showTopicInput, setShowTopicInput] = useState(false);
    const [topic, setTopic] = useState('');

    // Hardcoded timetable (for testing)
    const hardcodedTimetable = {
        "2025-02-27": [
            { id: 1, name: "Lecture 1", class: "FY" },
            { id: 2, name: "Lecture 2", class: "TY" },
            { id: 3, name: "Lecture 3", class: "SY" }
        ],
    };

    // Hardcoded student list (for testing)
    const hardcodedStudents = {
        FY: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' }
        ],
        TY: [
            { id: 3, name: 'Mark Johnson' },
            { id: 4, name: 'Emily Davis' }
        ],
        SY: [
            { id: 5, name: 'Sarah Lee' },
            { id: 6, name: 'Chris Brown' }
        ]
    };

    // Fetch timetable when the date is selected
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        const timetableData = hardcodedTimetable[selectedDate] || []; // Get timetable based on the date
        setTimetable(timetableData);
        setSelectedLecture(null); // Reset selected lecture
        setStudents([]); // Reset students
        setBulkStatus(''); // Reset bulk status
    };

    // Fetch students when a lecture is selected
    const handleLectureSelect = (lecture) => {
        setSelectedLecture(lecture);
        const studentsData = hardcodedStudents[lecture.class] || []; // Get students based on the class of the selected lecture
        setStudents(studentsData);

        // Reset attendance for the new list of students
        const initialAttendance = studentsData.reduce((acc, student) => {
            acc[student.id] = 'Absent'; // Default to Absent for all students
            return acc;
        }, {});
        setAttendance(initialAttendance);
    };

    // Handle bulk update selection
    const handleBulkUpdate = (status) => {
        const updatedAttendance = students.reduce((acc, student) => {
            acc[student.id] = status; // Update all students to the chosen status
            return acc;
        }, {});
        setAttendance(updatedAttendance);
        setBulkStatus(status); // Set bulk status (Present or Absent)
    };

    // Handle attendance selection for individual students
    const handleAttendanceChange = (studentId, status) => {
        setAttendance((prevState) => ({
            ...prevState,
            [studentId]: status,
        }));
    };

    // Handle confirm button click
    const handleConfirm = () => {
        setShowTopicInput(true);
    };

    // Calculate the count of present and absent students
    const calculateAttendanceCount = () => {
        let presentCount = 0;
        let absentCount = 0;

        Object.values(attendance).forEach((status) => {
            if (status === 'Present') {
                presentCount++;
            } else {
                absentCount++;
            }
        });

        return { presentCount, absentCount };
    };

    // Handle form submission (submit attendance to database)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date) {
            setMessage('Please select a date.');
            return;
        }

        if (!selectedLecture) {
            setMessage('Please select a lecture.');
            return;
        }

        if (!topic) {
            setMessage('Please enter a topic.');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        // Simulate submitting attendance (replace with actual API)
        setTimeout(() => {
            setIsSubmitting(false);
            setMessage('Attendance submitted successfully');
            setShowTopicInput(false);
        }, 2000);
    };

    const { presentCount, absentCount } = calculateAttendanceCount();

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Mark Attendance</h2>
            <form onSubmit={handleSubmit}>
                {/* Date Picker */}
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="form-control"
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>

                {/* Timetable for selected date */}
                {timetable.length > 0 && (
                    <div className="mb-3">
                        <label htmlFor="lecture" className="form-label">Select Lecture:</label>
                        <select
                            id="lecture"
                            className="form-select"
                            onChange={(e) => handleLectureSelect(JSON.parse(e.target.value))}
                            value={selectedLecture ? JSON.stringify(selectedLecture) : ''}
                        >
                            <option value="">Select Lecture</option>
                            {timetable.map((lecture) => (
                                <option key={lecture.id} value={JSON.stringify(lecture)}>
                                    {lecture.name} ({lecture.class})
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Bulk Update Dropdown */}
                {students.length > 0 && (
                    <div className="mb-3">
                        <label htmlFor="bulk-update" className="form-label">Bulk Update Attendance:</label>
                        <select
                            id="bulk-update"
                            className="form-select"
                            value={bulkStatus}
                            onChange={(e) => handleBulkUpdate(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="Present">Mark All Present</option>
                            <option value="Absent">Mark All Absent</option>
                        </select>
                    </div>
                )}

                {/* Student List and Attendance */}
                {students.length > 0 && selectedLecture && (
                    <div className="mb-3">
                        <h4>{selectedLecture.name} ({selectedLecture.class}) - Student List</h4>

                        {/* List of Students with Individual Attendance Buttons */}
                        {students.map((student) => (
                            <div key={student.id} className="form-check">
                                <label className="form-check-label d-flex justify-content-between">
                                    {student.name}
                                    <div>
                                        {/* Button to toggle individual student attendance */}
                                        <button
                                            type="button"
                                            onClick={() => handleAttendanceChange(student.id, attendance[student.id] === 'Present' ? 'Absent' : 'Present')}
                                            className={`btn ${attendance[student.id] === 'Present' ? 'btn-success' : 'btn-danger'} btn-sm`}
                                        >
                                            {attendance[student.id] === 'Present' ? 'P' : 'A'}
                                        </button>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                )}

                {/* Confirm Button */}
                {students.length > 0 && (
                    <div className="d-grid gap-2 mb-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    </div>
                )}

                {/* Topic Input (only shown after Confirm button is clicked) */}
                {showTopicInput && (
                    <div className="mb-3">
                        <label htmlFor="topic" className="form-label">Enter Topic:</label>
                        <input
                            type="text"
                            id="topic"
                            className="form-control"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter topic"
                            required
                        />
                    </div>
                )}

                {/* Show Attendance Count */}
                {showTopicInput && (
                    <div className="mb-3">
                        <p><strong>Attendance Count:</strong></p>
                        <p>Present: {presentCount} | Absent: {absentCount}</p>
                    </div>
                )}

                {/* Submit Button */}
                {showTopicInput && (
                    <div className="d-grid gap-2">
                        <button
                            type="submit"
                            className="btn btn-success"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
                        </button>
                    </div>
                )}
            </form>

            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default TeacherMarkAttendance;
