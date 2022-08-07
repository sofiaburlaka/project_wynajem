import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './style/app.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
