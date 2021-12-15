import React from 'react';
import {useState, useEffect} from 'react';
import Trainform from "../src/components/Trainform";
import Trainschedule from "../src/components/Trainschedule";
import "./App.css";
function App() {
  const [trainInfo, setTrainInfo] = useState([]);
  
  const dataupHandler = (pushedData) =>{
    setTrainInfo([...trainInfo,pushedData]);
    
  }
  useEffect(()=>{
    console.log(trainInfo);
  },[trainInfo])

  return (
    <div className="App">
      <div className="App-container">
      <Trainschedule trainInfo={trainInfo}/>
      <Trainform passDataUp = {dataupHandler}/>
      </div>
    </div>
  );
}

export default App;
