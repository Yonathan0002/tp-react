import React from 'react';

import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import Chronometer from "./components/Chronometer.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter text="un text" />
        <Chronometer text="start"/>
      </header>
    </div>
  );
}

export default App;
