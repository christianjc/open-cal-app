import { createContext, useContext, useState } from "react";
import {turnMotorOn, turnMotorOff} from "../api/motor"

const btn_1 = 'Motor On';
const btn_2 = 'Motor Off';
const motorContex = createContext({speed:10, time:1});

function Button(props) {
  const {speed, time} = useContext(motorContex);
  const motorChange = () => {
    if (props.name === 'Motor On') {
      turnMotorOn(speed, time);
    } else {
      turnMotorOff();
    }
  }

  return (
    <button 
    className="home-btn"
    onClick={motorChange}
    >
      {props.name}
    </button>  
  );
}


function MotorView() {
  const [motorSpeed, setMotorSpeed] = useState(10);
  const [timeOn, setTimeOn] = useState(1);
  
  return (
    <div className="Motor-content">
      <h1 className="motor-title">Motor</h1>
      <div className="motor-form">
        <div className="input-div">
          <label>Desired Motor Speed</label>
          <input type="text" value={motorSpeed} onChange={(e) => setMotorSpeed(e.target.value)}/>
        </div>
        <div className="input-div">
          <label>Desired Motor Time</label>
          <input type="text" value={timeOn} onChange={(e) => setTimeOn(e.target.value)}/>
        </div>
  
        <motorContex.Provider value={{speed:motorSpeed, time:timeOn}}>
          <div className="btn-div">
          <Button name={btn_1} />
          </div>
          <div className="btn-div">
          <Button name={btn_2} />
          </div>
        </motorContex.Provider>
      </div>
    </div>
   
  );
}

export default MotorView;