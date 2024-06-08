import { createContext, useState } from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const response = await AuthService.loginService(username, password);
      if (response.data.access_token) {
        setIsAuthenticated(JSON.parse(localStorage.getItem('user')));
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error(error); //login fonk. login butonuna bağladığımız yerdeki try catch içerisinde de catch e düşebilmesi iççin yeni bir hata fırlatıyoruz. yoksa catche düşmez.
    }
  };

  const logout = () => {
    AuthService.logoutService();
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
