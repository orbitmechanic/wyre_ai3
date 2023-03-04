import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './auth-context';
import './Home.css';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-widget">
        <h1 className="home-title">Welcome to Tinkerbank!</h1>
        {isLoggedIn ? (
          <>          
            <button className="home-button profile" 
              onClick={() => navigate('/profile')}>Your Profile</button>
           <button className="home-button portfolio" 
              onClick={() => navigate('/portfolio')}>Your Profile</button>
          </>
        ) : (
          <>
            <button className="home-button signup" 
              onClick={() => navigate('/signup')}>Get flying to adventure!</button>
            <button className="home-button onboarding" 
              onClick={() => navigate('/onboarding')}>Finish Verifying ID!</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
