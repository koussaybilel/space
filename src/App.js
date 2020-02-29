import React ,{Component} from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import Space from './components/Space';
import './App.css';
function App() {
  return (
    <div>
    <Router>
    <avbarN />
    
     
     
          <div>
           
            <switch>
            <Route exact   path='/' component={Space} />
           

        
            </switch>
            </div>
      
            </Router>  
     
    </div>
  );
}

export default App;
