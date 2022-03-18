import { Link } from "react-router-dom";
import Header from "../componets/Header"
import Footer from "../componets/Footer"

const btn_1 = 'Projector ON';
const btn_2 = 'Projector Off';


function Button(props) {
  
  return (  
    <button className="home-btn">{props.name}</button>
  );
}

function ProjectorView() {
  return (
    <div className="Projector-content">
      <h1>Projector</h1>
      <div>
        <Button name={btn_1} />
        <Button name={btn_2} />
      </div>
    </div>
  );
}


export default ProjectorView;