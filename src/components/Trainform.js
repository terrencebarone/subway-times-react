import React from 'react';
import Forminput from './Forminput';
import './css/Trainform.css';

function Trainform() {
    return (
      <div className="form-container">
        <h1 className="form-header">Add New Train</h1>
        <form className="train-form">
            <Forminput
                labelText="Name of Train"
            />
            <Forminput
                labelText="Train Destination"
            />
            <Forminput
                labelText="Time of First Train (hh:mm)"
            />
            <Forminput
                labelText="Frequency (Minutes)"
            />
            <button className="form-button">Add Train</button>
        </form>
      </div>
    );
  }
  
  export default Trainform;