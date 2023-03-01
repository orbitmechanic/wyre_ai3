import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth-context';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Portfolio from './components/Portfolio';
import Home from './components/Home'; // import the new home page component

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
