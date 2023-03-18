import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from '../src/components/Home';


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
       <Home />

      </BrowserRouter>
    </div>
  );
}

export default App;