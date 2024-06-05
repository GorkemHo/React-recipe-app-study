import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  });
  return (
    <div className="loading">
      <div className="loader"></div>
      <div className="loader-1"></div>
    </div>
  );
};

export default LoadingPage;
