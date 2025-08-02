import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./About.css";
const About: React.FC = () => {
  const theme = useTheme();
  return (
    <div className={`p-6 text-center ${theme}`} >
      <div>
        <h1 className="text-3xl font-bold mb-4 ">About Us</h1>
        <p className="text-lg">This is a demo application for theme switching and authentication in React.</p>
      </div>
    </div>
  );
};

export default About;
