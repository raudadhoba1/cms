import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      const role = localStorage.getItem('role');
      if (role === 'ADMIN') {
        navigate('/admin');
      } else if (role === 'USER') {
        navigate('/user');
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShowError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://172.17.30.231:8080/api/login', { email, password });

      if (response.status === 200) {
        const { userId, email, firstName, lastName, role, organization, status } = response.data;

        if (userId) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userId', userId);
          localStorage.setItem('email', email);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('role', role);
          localStorage.setItem('organization', organization);
          localStorage.setItem('status', status);

          if (role === 'ADMIN') {
            navigate('/admin');
          } else if (role === "TEACHER") {
            navigate('/teacher');
          } else if (role === 'STUDENT') {
            navigate('/student');
          } else if (role === 'LIBRARIAN') {
            navigate('/librarian');
          } else {
            navigate('/');
          }
        }
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#131921' }}>
      <div className="row w-100">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card shadow" style={{ backgroundColor: '#232f3e', color: '#ffffff', borderRadius: '8px' }}>
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Log In</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ backgroundColor: '#37475a', color: '#ffffff', border: 'none' }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ backgroundColor: '#37475a', color: '#ffffff', border: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100"
                  disabled={loading}
                  style={{ backgroundColor: '#febd69', color: '#131921', fontWeight: 'bold' }}
                >
                  {loading ? 'Wait a minute...' : 'Log In'}
                </button>
              </form>

              {showError && (
                <div className="alert alert-danger mt-3">
                  Invalid credentials. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
