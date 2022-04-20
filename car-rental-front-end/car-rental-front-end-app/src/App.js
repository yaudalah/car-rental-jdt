// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom';

import {Header} from './pages/Header';
import {MainContainer} from './pages/MainContainer';

import { MainApp } from './pages/MainApp';
import { MenuMobil } from './pages/MenuMobil';
import { OnGoingRental } from './pages/OnGoingRental';
import { History } from './pages/History';


function App() {
  return (
    <div className="App">
      {/* <div className="Header"> <Header /> </div>
      <div className="Main"> <MainContainer /> </div>
      <div className="OurServices"> <OurServices /> </div>
      <div className="Footer"> <Footer /> </div>
      <div className="cars"> <cars /> </div> */}

      
      <Routes>
        <Route path ="/" element={<MainContainer />} />
        <Route path ="/header" element={<Header />} />
        <Route path ="/mainapp" element={<MainApp />} />        
        <Route path ="/ongoingrental" element={<OnGoingRental />} />        
        <Route path ="/history" element={<History />} />
        <Route path ="/menumobil" element={<MenuMobil />} />        
        <Route path ="/cars" element={<cars />} />        
      </Routes>
    </div>
  );
}

export default App;
