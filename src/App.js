import React from 'react';
import './App.css';
import Weather from './Weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App(){
  return (
    <div className="App">
      <header className="app-header">
           <h1 className="app-title">
            <FontAwesomeIcon icon={faCloud} />
              {' '}Weather App </h1>
           <p className="app-subtitle">Created with React</p>
         </header>
    <div className="container">
         
         <Weather defaultCity= "New York" />
    </div>
      <footer>
        This project is open-sourced on {" "}
      <strong> 
        <a href="https://github.com/joanamorais13/react-weather-project"  target="_blank"
  rel="noopener noreferrer"
          >GitHub <FontAwesomeIcon icon={faGithub} /> </a></strong>
        </footer>
    
    </div>
  );
}

export default App;
