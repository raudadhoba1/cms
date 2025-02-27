import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const backend_url = process.env.backend_url
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  //console.log(backend_url)

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
      const response = await axios.post('http://172.17.30.231:8080/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { userId, email, name, role } = response.data;

        if (userId) {
          localStorage.setItem('userId', userId);
          localStorage.setItem('email', email);
          localStorage.setItem('name', name); 
          localStorage.setItem('role', role);
        
          if (role === 'ADMIN') {
            navigate('/admin');
          } else if(role === "TEACHER") {
            navigate('/teacher');
          } else if (role === 'STUDENT') {
            navigate('/student');
          }else if (role === 'LIBRARIAN') {
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
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Login</h2>
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
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
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
