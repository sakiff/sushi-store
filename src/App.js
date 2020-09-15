import React from 'react';
import Navigation from './components/Navbar'
import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu'
import About from './components/About'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Order from './components/Order'

function App() {
  return (
    <>
      <Navigation/>
      <Banner/>
      <Menu/>
      <About/>
      <Reservations/>
      <div className="orderContainer">
        <Order/>
      </div>
      <Contact/>
      
    </>
  );
}

export default App;
