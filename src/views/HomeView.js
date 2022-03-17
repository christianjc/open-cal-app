import { useContext } from "react";
import { AppContext } from "../AppContext";

const btn_1 = 'Motor Controller';
const btn_2 = 'Projector Controller';


function Button(props) {
  const {view, setView} = useContext(AppContext)

  function changeView() {
    if (props.name === btn_1) {
      setView('MotorView');
      console.log('changing view to Motor');
    } else {
      setView('ProjectorView');
      console.log('changing view to Projector');
    }
   
  }
    return (
        <button className="control-btn" onClick={changeView}>{props.name}</button>
    )
}

function HomeView (props) {
  
    
  return (
    <div className="App-content">
      <Button name={btn_1} />
      <Button name={btn_2} />
    </div>
  )
}

export default HomeView