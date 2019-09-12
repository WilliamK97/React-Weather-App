import React from 'react';
import './App.css';
import WeatherContainer from './components/Weather/WeatherContainer';
import Nav from './components/Nav'
import {BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Nav/>
        <div className="center container">
          <WeatherContainer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
