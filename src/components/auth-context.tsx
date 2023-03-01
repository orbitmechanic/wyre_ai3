import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  session: any;
  login: (session: any) => void;
  logout: () => void;
}

const initialAuthContext: AuthContextType = {
  isLoggedIn: false,
  session: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initialAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [session, setSession] = useState<any>(null);

  const login = (session: any) => {
    setIsLoggedIn(true);
    setSession(session);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
