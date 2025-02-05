import React from 'react';
import './App.css';
import Weather from './Weather';

function App(){
  return (
    <div className="App">
    <div className="container">
         <Weather />
    </div>
      <footer>
        This project is open sourced on {" "}
      <strong> 
        <a href="https://github.com/joanamorais13/react-weather-project"  target="_blank"
  rel="noopener noreferrer"
          >GitHub</a></strong>
        </footer>
    
    </div>
  );
}

export default App;
