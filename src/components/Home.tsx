import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="widget">
        <h1 className="title">Welcome to Tinkerbank!</h1>
        <div className="buttons">
          <button className="button1">
            <button className="button1" onClick={() => navigate('/signup')}>Get flying to adventure!</button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
