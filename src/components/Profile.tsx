import React, { useContext } from 'react';
import { AuthContext } from './auth-context';

const Profile: React.FC = () => {
  const { session } = useContext(AuthContext);

  return (
    <div>
      <h1>{session.user.firstName} {session.user.lastName}</h1>
      <p>Email: {session.user.email}</p>
      {/* TODO: add profile picture and any other relevant details */}
    </div>
  );
};

export default Profile;
