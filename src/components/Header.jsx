import React, { useContext } from 'react';
import '../assets/styles/header.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav>
        <div className="brand">
          <h3>Recipe Platform</h3>
        </div>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="/">
              Home
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="addrecipe">
                Add Recipe
              </NavLink>
            </li>
          ) : (
            ''
          )}
          {isAuthenticated ? (
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })} to="profile">
                Profile
              </NavLink>
            </li>
          ) : (
            ''
          )}

          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#03045e' : '' })}
              onClick={!isAuthenticated ? handleLogin : handleLogout}
              to="login"
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </NavLink>
          </li>

          {/* <button onClick={isAuthenticated ? handleLogin : handleLogout}>{isAuthenticated ? 'Logout' : 'Login'}</button> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
