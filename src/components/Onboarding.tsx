import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const [onboardingUrl, setOnboardingUrl] = useState('');
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_WYRE_API_KEY;

  const handleCreateOnboardingUrl = async () => {
    try {
      const response = await axios.get('https://api.sendwyre.com/v3/users/US_X3RCVXREFCA/onboarding', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      console.log(response.data);
      setOnboardingUrl(response.data.onboardingUrl);

      // Open the onboarding URL in a new tab
      window.open(onboardingUrl);

      // Navigate back to the home page
      navigate('/');
    } catch (error) {
      console.error(error);
      // TODO: Handle error creating onboarding URL
    }
  };

  return (
    <div>
      <h2>Onboarding</h2>
      <button onClick={handleCreateOnboardingUrl}>Create Onboarding Url</button>
    </div>
  );
};

export default Onboarding;
