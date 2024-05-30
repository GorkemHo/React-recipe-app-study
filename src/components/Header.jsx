import React from 'react';
import '../assets/styles/header.scss';

const Header = () => {
  return (
    <nav>
      <div className="brand">
        <h3>Recipe Platform</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>Add Recipe</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Header;
