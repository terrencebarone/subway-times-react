import React from 'react';
import Trainform from "../src/components/Trainform";
import Trainschedule from "../src/components/Trainschedule";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-container">
      <Trainschedule/>
      <Trainform/>
      </div>
    </div>
  );
}

export default App;
