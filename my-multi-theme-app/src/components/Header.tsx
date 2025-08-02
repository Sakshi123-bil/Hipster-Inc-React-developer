// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        <div className="logo">🌟 MyApp</div>
        <div style={{marginTop:"20px"}}>
        
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
          <Link to="/products" className={isActive("/products") ? "active" : ""}>
            Products
          </Link>
        </nav>
        </div>
      </div>



      <div className="header-right">
        <div>
          <select
            value={theme}
            onChange={handleThemeChange}
            className={`theme-dropdown ${theme}`}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
        <div style={{ marginLeft: "10px" }}>
          {isAuthenticated && (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
