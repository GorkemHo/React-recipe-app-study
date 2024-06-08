import React, { useContext, useState } from 'react';
import '../assets/styles/login.scss';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //işlemler
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      alert('error');

      setUserName('');
      setPassword('');
    }
  };

  //john@mail.com - changeme
  return (
    <>
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="login-text">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-lock fa-stack-1x"></i>
            </span>
          </p>
          <input
            type="text"
            className="login-username"
            autoFocus={true}
            required
            placeholder="Email"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="login-password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" name="Login" value="Login" className="login-submit" />
        </form>
        <div className="underlay-photo"></div>
        <div className="underlay-black"></div>{' '}
      </div>
    </>
  );
};

export default Login;
