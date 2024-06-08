// import { useEffect, useState } from 'react';
// import { data } from './assets/data/recipes'; // .js uzantısını kaldırabilirsiniz
import './App.css';
import React from 'react';
import Header from './components/Header';

import CardList from './components/CardList';
import NewRecipeForm from './components/NewRecipeForm';

import Login from './pages/Login';
import { DataProvider } from './context/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage.jsx';

import AuthContextProvider from './context/AuthContext.jsx';
import { PrivateRoute } from './services/PrivateRoute.jsx';
import Profile from './pages/Profile.jsx';
// import { PrivateRoute } from './services/PrivateRoute.jsx';
// import axios from 'axios';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path="/loading" element={<LoadingPage />} />
            <Route>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addrecipe" element={<PrivateRoute element={<NewRecipeForm />} />} />
              <Route path="/" element={<CardList />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
