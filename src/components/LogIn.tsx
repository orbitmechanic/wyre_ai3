import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './auth-context';
import './LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const { login } = useContext(AuthContext);
  const location = useLocation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      // Authenticate the user with the Wyre API
      const response = await axios.post(
        'https://api.sendwyre.com/v3/sessions/authenticate',
        {
          email,
          password,
        },
        {
          auth: {
            username: process.env.REACT_APP_WYRE_API_KEY!,
            password: '',
          },
        }
      );
  
      // Save the token to local storage
      localStorage.setItem('wyreToken', response.data.token);
  
      // Update the login state and session object
      const { session, user } = response.data;
      login(session, user);
  
      // Redirect to the portfolio page
      const nextPathname = location.state?.from || '/portfolio';
      window.location.href = nextPathname;
    } catch (error: any){
      // Handle authentication errors
      setError(error.response?.data?.message ?? 'An unknown error occurred');
    }
  };

  return (
    <div className="login-widget">
      <div className="login-form">
        <h2 className="login-header">Log In</h2>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-row">
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Create one</Link>
        </div>
      </div>
    </div>
  );
};




export default LogIn;