import { useEffect, useState } from 'react';
// import { data } from './assets/data/recipes'; // .js uzantısını kaldırabilirsiniz
import './App.css';
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import CardList from './components/CardList';
import NewRecipeForm from './components/NewRecipeForm';
import Login from './pages/Login';
import { DataProvider } from './context/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage.jsx';
import About from './pages/About.jsx';
// import axios from 'axios';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={<LoadingPage />} /> */}
          <Route path="/" element={<Header />}>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/addrecipe" element={<NewRecipeForm />} />
            <Route path="/home" element={<CardList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
