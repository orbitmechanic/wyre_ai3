import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  session: any;
  user: any;
  login: (session: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

const initialAuthContext: AuthContextType = {
  isLoggedIn: false,
  session: null,
  user: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
};

export const AuthContext = createContext(initialAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const login = (session: any) => {
    setIsLoggedIn(true);
    setSession(session);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setSession(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, session, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
