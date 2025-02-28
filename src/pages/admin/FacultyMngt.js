import React, { useState } from 'react';

const FacultyMngt = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    mobile: '',
    password: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedFacultyList = facultyList.map((faculty, index) =>
        index === editingIndex ? formData : faculty
      );
      setFacultyList(updatedFacultyList);
      setEditingIndex(null);
    } else {
      setFacultyList([...facultyList, formData]);
    }
    setFormData({ firstName: '', lastName: '', email: '', userId: '', mobile: '', password: '' });
  };

  const handleEdit = (index) => {
    setFormData(facultyList[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setFacultyList(facultyList.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: '#131921', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <div className="container w-50 p-4" style={{ backgroundColor: '#232f3e', borderRadius: '8px' }}>
        <h2 className="text-center">Add Faculty & Subject Details!</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          FirstName
          <input type="text" name="firstName" placeholder="First Name" className="form-control bg-dark text-white" value={formData.firstName} onChange={handleChange} required />
          Last Name
          <input type="text" name="lastName" placeholder="Last Name" className="form-control bg-dark text-white" value={formData.lastName} onChange={handleChange} required />
          Email
          <input type="email" name="email" placeholder="Email" className="form-control bg-dark text-white" value={formData.email} onChange={handleChange} required />
          User ID
          <input type="text" name="userId" placeholder="User ID" className="form-control bg-dark text-white" value={formData.userId} onChange={handleChange} required />
          Mobile
          <input type="text" name="mobile" placeholder="Mobile" className="form-control bg-dark text-white" value={formData.mobile} onChange={handleChange} required />
          Password
          <input type="password" name="password" placeholder="Password" className="form-control bg-dark text-white" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#febd69', color: '#131921', fontWeight: 'bold' }}>
            {editingIndex !== null ? 'Update' : 'Add'} Faculty
          </button>
        </form>
        <div className="mt-4">
          <h4>Faculty List</h4>
          <ul className="list-group">
            {facultyList.map((faculty, index) => (
              <li key={index} className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                {faculty.firstName} {faculty.lastName} - {faculty.email} - {faculty.userId} - {faculty.mobile}
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

export default FacultyMngt;
