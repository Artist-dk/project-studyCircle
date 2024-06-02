

import React, { useState, useEffect } from 'react';
import Api from '../../services/api';

export default function BridgeMain() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await Api.fetchBridgeUsers();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };


    
    getUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='box-3 mid' >
    <div className="bridge-user-profile">
      <h1>User Profile</h1>
      {user && (
        <div className='expert-user'>
          <div>
            <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          </div>
          <div className='exper-user-details'>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
