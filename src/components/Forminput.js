import React from 'react';
import './css/Forminput.css';
function Forminput(props){
    return(
        <div className="input-container">   
            <label className="input-label">{props.labelText}</label>
            <input
                type={props.text}
                required
                className="input"
                value={props.inputText}
            />
          
        </div>
    );
}

export default Forminput;