import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/styles/profile.scss';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userToken = localStorage.getItem('user');
        if (userToken) {
          const token = JSON.parse(userToken).access_token;
          const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching the user profile:', error);
      }
    };

    getUserProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <img className="profile-image" src={user.avatar} alt={`${user.name}'s avatar`} />
      <h1 className="profile-name">{user.name}</h1>
      <p className="profile-email">{user.email}</p>
      <p className="profile-role">{user.role}</p>
    </div>
  );
};

export default Profile;
