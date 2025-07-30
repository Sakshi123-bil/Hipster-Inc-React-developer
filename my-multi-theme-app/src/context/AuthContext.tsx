import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  username: string;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  username: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('username');
  });
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem('username') || '';
  });

  const login = (username: string, password: string) => {
    setAuthenticated(true);
    setUsername(username);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Optional, remove if security concern
  };

  const logout = () => {
    setAuthenticated(false);
    setUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('theme');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);