import React from 'react';
import './App.css';
import Weather from './Weather';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App(){
  return (
    <div className="App">
      <header className="app-header">
           <h1 className="app-title">Weather App</h1>
         </header>
    <div className="container">
         
         <Weather defaultCity= "New York" />
    </div>
      <footer>
        This project is open sourced on {" "}
      <strong> 
        <a href="https://github.com/joanamorais13/react-weather-project"  target="_blank"
  rel="noopener noreferrer"
          >GitHub <i className="fab fa-github"></i> </a></strong>
        </footer>
    
    </div>
  );
}

export default App;
