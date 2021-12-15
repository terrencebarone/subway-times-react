import React from 'react';
import {useState} from 'react';
import './css/Trainform.css';

function Trainform(props) {
    //state that changes when user types into input
    const [trainInfo, setTrainInfo] = useState({
        trainName: '',
        trainDest: '',
        firstTrain: '',
        freq: ''
    });
    //handler that runs when a user has changed the input info
    function infoChangeHandler(e){
        const newData={...trainInfo}
        newData[e.target.id] = e.target.value
        setTrainInfo(newData)
    }
    //handler that runs when a user submits the form.
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        //using the passDataUp prop to send info to APP.js
        props.passDataUp(trainInfo);
    }
    
    return (
      <div className="form-container">
        <h1 className="form-header">Add New Train</h1>
        <form className="train-form" onSubmit={formSubmitHandler} >
            <div className="input-container">   
                <label className="input-label">Train Name</label>
                <input className="input"
                 id="trainName"
                 value={trainInfo.trainName}
                 onChange={infoChangeHandler}
                 required
                />
            </div>
            <div className="input-container">   
                <label className="input-label">Train Destination</label>
                <input className="input"
                 id="trainDest"
                 value={trainInfo.trainDest}
                 onChange={infoChangeHandler}required

                />
            </div>
            <div className="input-container">   
                <label className="input-label">Time of First Train (hh:mm)</label>
                <input className="input"
                 id="firstTrain"
                 value={trainInfo.firstTrain}
                 onChange={infoChangeHandler}
                 required
                />
            </div>
            <div className="input-container">   
                <label className="input-label">Frequency (Minutes)</label>
                <input className="input"
                 id="freq"
                 value={trainInfo.freq}
                 onChange={infoChangeHandler}
                 required
                />
            </div>
            <button className="form-button">Add Train</button>
        </form>
      </div>
    );
  }
  
  export default Trainform;