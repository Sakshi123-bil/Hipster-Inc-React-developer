import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { useAuth } from "./context/AuthContext";
import { useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
   const { isAuthenticated } = useAuth();
   const {theme} = useTheme();
  return (
    <>
      {(isAuthenticated && theme!="theme2") ? <Header />: <Sidebar/>}
      <AppRoutes />
    </>
  );
};

export default App;