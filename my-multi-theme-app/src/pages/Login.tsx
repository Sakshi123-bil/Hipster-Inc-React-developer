import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [error, setError] = useState("");

  useEffect(() => {
    if (username && password) {
      navigate('/home');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      login(username, password);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Welcome</h2>

          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className={username ? 'floating active' : 'floating'}>Username</label>
          </div>

          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={password ? 'floating active' : 'floating'}>Password</label>
          </div>

          {/* <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div> */}

          <button type="submit" className="login-button">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
