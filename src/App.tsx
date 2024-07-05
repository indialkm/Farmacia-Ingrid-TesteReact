import React from 'react';
import './App.css';
import Home from './components/home/Home.tsx';
import Footer from './components/footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;