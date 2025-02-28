import React, { useState } from 'react';

const CoursesManagement = () => {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    courseName: '',
    className: '',
    subjectName: '',
    facultyName: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedSubjects = subjects.map((subject, index) =>
        index === editingIndex ? formData : subject
      );
      setSubjects(updatedSubjects);
      setEditingIndex(null);
    } else {
      setSubjects([...subjects, formData]);
    }
    setFormData({ courseName: '', className: '', subjectName: '', facultyName: '' });
  };

  const handleEdit = (index) => {
    setFormData(subjects[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: '#131921', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <div className="container w-50 p-4" style={{ backgroundColor: '#232f3e', borderRadius: '8px' }}>
        <h2 className="text-center">Manage Courses & Subjects</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          CourseName
          <input type="text" name="courseName" placeholder="Course Name" className="form-control bg-dark text-white" value={formData.courseName} onChange={handleChange} required />
          Class
          <input type="text" name="className" placeholder="Class Name" className="form-control bg-dark text-white" value={formData.className} onChange={handleChange} required />
          Subject
          <input type="text" name="subjectName" placeholder="Subject Name" className="form-control bg-dark text-white" value={formData.subjectName} onChange={handleChange} required />
          Faculty Name
          <input type="text" name="facultyName" placeholder="Faculty Name" className="form-control bg-dark text-white" value={formData.facultyName} onChange={handleChange} required />
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#febd69', color: '#131921', fontWeight: 'bold' }}>{editingIndex !== null ? 'Update' : 'Add'} Subject</button>
        </form>
        <div className="mt-4">
          <h4>Subjects List</h4>
          <ul className="list-group">
            {subjects.map((subject, index) => (
              <li key={index} className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                {subject.courseName} - {subject.className} - {subject.subjectName} ({subject.facultyName})
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

export default CoursesManagement;
