import React from 'react';
import '../assets/styles/header.scss';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <div className="brand">
          <h3>Recipe Platform</h3>
        </div>
        <ul>
          {/* <li>Home</li>
        <li>Add Recipe</li>
        <li>About</li> */}
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="addrecipe">
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
