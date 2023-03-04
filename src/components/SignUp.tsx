import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

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
        "blockchains": [
          "ALL"
        ],
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

  console.log('Sign up page rendered');

  return (
    <div className="signup-widget">
      <form onSubmit={handleSubmit}>
        <h1>Create an Account!</h1>
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
        <div className="password-form-row">
          <div className="password-form-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="password-form-col">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="password-form-row">
          <div className="password-form-col">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="password-form-col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <DatePicker
            id="dateOfBirth"
            selected={dateOfBirth ? new Date(dateOfBirth) : null}
            onChange={(date: Date) => setDateOfBirth(date.toISOString())}
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            required
          />
        </div>
        <div className="address-block">
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
          <div className="form-row">
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
              <select
                id="state"
                value={state}
                onChange={event => setState(event.target.value)}
                required
              >
                <option value="">-- Select a state --</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
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
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              value={country}
              onChange={event => setCountry(event.target.value)}
              required
            >
              <option value="">-- Select a country --</option>
              <option value="United States">United States</option>        
              <option value="United Kingdom">United Kingdom</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Australia">Australia</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Canada">Canada</option>
              <option value="Dominica">Dominica</option>
              <option value="Grenada">Grenada</option>
              <option value="Ireland">Ireland</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Malta">Malta</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            </select>
          </div>
        </div>      
        <button type="submit">Creeate Account</button>
        <div className="log-in-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
