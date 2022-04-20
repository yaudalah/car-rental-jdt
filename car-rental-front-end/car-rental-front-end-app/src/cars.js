import './App';
import React from 'react';
import { Routes, Route} from 'react-router-dom';



import {Header} from './pages/Header';
import {Footer} from './pages/Footer';
import { MainApp } from './pages/MainApp';

function cars() {
    return (
      <div className="cars">
        {/* <div className="Header"> <Header /> </div>
        <div className="MainApp"> <MainApp /> </div>
        <div className="Footer"> <Footer /> </div> */}

        
        <Routes>
          
        <Route path ="/" element={<MainContainer />} />
        <Route path ="/header" element={<Header />} />
        <Route path ="/mainapp" element={<MainApp />} />        
              
      </Routes>
      </div>
    );
  }
  
  export default cars;