import React from 'react';
import './css/Trainschedule.css';

function Trainschedule(){
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
                </tbody>
            </table>
        </div>
    );
}

export default Trainschedule;