import React, { useState } from 'react';

const StudentMngt = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    studID: '',
    course: '',
    className: '',
    mobile: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedStudents = students.map((student, index) =>
        index === editingIndex ? formData : student
      );
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      setStudents([...students, formData]);
    }
    setFormData({ firstName: '', middleName: '', lastName: '', email: '', password: '', studID: '', course: '', className: '', mobile: '' });
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: '#131921', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <div className="container w-50 p-4" style={{ backgroundColor: '#232f3e', borderRadius: '8px' }}>
        <h2 className="text-center">Add New Student Details!</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          FirstName
          <input type="text" name="firstName" placeholder="First Name" className="form-control bg-dark text-white" value={formData.firstName} onChange={handleChange} required />
          MiddleName
          <input type="text" name="middleName" placeholder="Middle Name" className="form-control bg-dark text-white" value={formData.middleName} onChange={handleChange} required />
          LastName
          <input type="text" name="lastName" placeholder="Last Name" className="form-control bg-dark text-white" value={formData.lastName} onChange={handleChange} required />
          Email
          <input type="email" name="email" placeholder="Email" className="form-control bg-dark text-white" value={formData.email} onChange={handleChange} required />
          Password
          <input type="password" name="password" placeholder="Password" className="form-control bg-dark text-white" value={formData.password} onChange={handleChange} required />
          Student ID
          <input type="text" name="studID" placeholder="Student ID" className="form-control bg-dark text-white" value={formData.studID} onChange={handleChange} required />
          Course
          <input type="text" name="course" placeholder="Course" className="form-control bg-dark text-white" value={formData.course} onChange={handleChange} required />
          Class
          <input type="text" name="className" placeholder="Class" className="form-control bg-dark text-white" value={formData.className} onChange={handleChange} required />
          Mobile
          <input type="text" name="mobile" placeholder="Mobile" className="form-control bg-dark text-white" value={formData.mobile} onChange={handleChange} required />
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#febd69', color: '#131921', fontWeight: 'bold' }}>
            {editingIndex !== null ? 'Update' : 'Add'} Student
          </button>
        </form>
        <div className="mt-4">
          <h4>Student List</h4>
          <ul className="list-group">
            {students.map((student, index) => (
              <li key={index} className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                {student.firstName} {student.middleName} {student.lastName} - {student.email} - {student.studID} - {student.course} - {student.className} - {student.mobile}
                <div>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentMngt;
