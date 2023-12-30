import React from 'react';
import UserInterface from '../components/UserInterface';

const Home: React.FC = () => {
  return (
    <div>
      <UserInterface backendName="flask" />
    </div>
  );
}

export default Home;