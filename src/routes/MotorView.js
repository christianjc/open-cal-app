import { Link } from "react-router-dom";
import Header from "../componets/Header"
import Footer from "../componets/Footer"

const btn_1 = 'Motor On';
const btn_2 = 'Motor Off';


function Button(props) {
  
  return (
    <button className="home-btn">{props.name}</button>  
  );
}


function MotorView() {
    return (
        <div>
      <Header name="motor"/>
      <div className="App-content">
        <Button name={btn_1}  />
        <Button name={btn_2} />
      </div>
      <Footer/>
    </div>
    )
}

export default MotorView;