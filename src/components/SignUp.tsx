import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_WYRE_API_KEY;
  const clientId = process.env.REACT_APP_WYRE_CLIENT_ID;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://api.sendwyre.com/v3/users', {
        email,
        password,
        type: 'individual',
        country: 'US',
        lang: 'en',
        profileFields: {
          firstName,
          lastName,
          type: 'individual',
          country: 'US',
          residenceAddress: {
            street1,
            street2,
            city,
            state,
            postalCode,
            country,
          },
          dateOfBirth,
        },
        scope: 'TRANSFER',
      }, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'X-Wyre-Client-Id': clientId,
        },
      });

      console.log(response.data);
      // Navigate the user to the login page
      navigate('/login');
    } catch (error) {
      console.error(error);
      // TODO: Handle error creating user
    } 
  };

  return (
    <div className="signup-widget">
      <h1>Sign up for our website</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="street1">Street 1:</label>
          <input
            type="text"
            id="street1"
            value={street1}
            onChange={event => setStreet1(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="street2">Street 2:</label>
          <input
            type="text"
            id="street2"
            value={street2}
            onChange={event => setStreet2(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="City"
            value={city}
            onChange={event => setCity(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="State"
            value={state}
            onChange={event => setState(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={event => setPostalCode(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={event => setCountry(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={event => setDateOfBirth(event.target.value)}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
