import { Link } from "react-router-dom";
import Header from "../componets/Header"
import Footer from "../componets/Footer"

const btn_1 = 'Projector ON';
const btn_2 = 'Projector Off';


function Button(props) {
  
  return (
      
        <button className="home-btn">{props.name}</button>
  )
}

function ProjectorView() {
    return (
        <div>
      <Header name="projector"/>
      <div className="App-content">
        <Button name={btn_1} />
        <Button name={btn_2} />
      </div>
      <Footer/>
    </div>
    )
}

export default ProjectorView;