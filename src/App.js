import React from 'react';
import './App.css';
import WeatherContainer from './components/Weather/WeatherContainer';
import Nav from './components/Nav'


function App() {
  return (
   <div>
    <Nav/>
      <div className="center container">
        <WeatherContainer/>
      </div>
    </div>
  );
}

export default App;
