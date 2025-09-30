import React from 'react';
import './App.css';
import Weather from './Weather';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App(){
  return (
    <div className="App">
    <div className="container">
         <Weather defaultCity= "New York" />
    </div>
      <footer>
        This project is open sourced on {" "}
      <strong> 
        <a href="https://github.com/joanamorais13/react-weather-project"  target="_blank"
  rel="noopener noreferrer"
          ><i className="fab fa-github"></i> GitHub</a></strong>
        </footer>
    
    </div>
  );
}

export default App;
