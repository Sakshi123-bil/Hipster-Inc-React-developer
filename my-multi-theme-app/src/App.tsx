import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
   const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Header />}
      <AppRoutes />
    </>
  );
};

export default App;