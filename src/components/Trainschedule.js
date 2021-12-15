import React from 'react';
import {useState} from 'react';
import './css/Trainschedule.css';

function Trainschedule(props){
    const trainData = props.trainInfo;
    
    let htmlElements=[];
    for(var i=0; i < trainData.length;i++){
      htmlElements.push(<tr>
          <td>{trainData[i].trainName}</td>
          <td>{trainData[i].trainDest}</td>
          <td>{trainData[i].freq}</td>
      </tr>)
    }

    return(
        <div className="schedule-container">
            <table>
                <caption className="schedule-caption">Train Schedule</caption>
                <tbody>
                    <tr>
                        <th className="table-header">Train Name</th>
                        <th className="table-header">Destination</th>
                        <th className="table-header">Frequency in Minutes</th>
                        <th className="table-header">Next Arrival</th>
                        <th className="table-header">Minutes Away</th>
                    </tr>
                    {htmlElements}
                   
                </tbody>
            </table>
        </div>
    );
}

export default Trainschedule;