// src/components/Sidebar.tsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
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
    <>
      {!menuOpen && (<button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>)}


      <div className={`sidebar-container ${menuOpen ? "open" : "closed"}`}>
        <aside className="sidebar">
          <div style={{display:"flex" , justifyContent:"space-between"}}>
          <div className="logo">🌟 MyApp</div>
          <div onClick={()=>setMenuOpen(false)} style={{cursor:"pointer"}}>X</div>
          </div>
          <nav className="sidebar-nav">
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

          <div className="sidebar-footer">
            <select
              value={theme}
              onChange={handleThemeChange}
              className="theme-dropdown"
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>

            {isAuthenticated && (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
