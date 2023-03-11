import React, { useState } from 'react';

// Define the shape of the authentication context
interface AuthContextType {
  isLoggedIn: boolean;
  session: any;
  user: any;
  login: (sessionData: any, userData: any) => void;
  logout: () => void;
  setUser: (userData: any) => void;
}

// Initialize default context values
const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  session: null,
  user: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
};

// Define the AuthProvider component props
interface AuthProviderProps {
  children: React.ReactNode;
}

// Create the authentication context
export const AuthContext = React.createContext<AuthContextType>(defaultAuthContext);

// Define the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  // Handle user login
  const handleLogin = (sessionData: any, userData: any) => {
    setIsLoggedIn(true);
    setSession(sessionData);
    setUser(userData);
  };

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSession(null);
    setUser(null);
  };

  // Pass the authentication context to child components
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, session, user, login: handleLogin, logout: handleLogout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
