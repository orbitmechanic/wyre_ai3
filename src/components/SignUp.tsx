import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div>
      <h1>Sign up for our website</h1>
      <form>
        {/* form fields */}
      </form>
      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  );
};

export default SignUp;
