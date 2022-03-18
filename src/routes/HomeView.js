import { Link, Outlet } from "react-router-dom";
import Header from "../componets/Header"
import Footer from "../componets/Footer"

const btn_1 = 'Motor Controller';
const btn_2 = 'Projector Controller';


function Button(props) {
  
  return (
      <Link to={"/" + props.link}>
        <button className="home-btn">{props.name}</button>
      </Link>
  )
}

function HomeView (props) {
  
  return (
    <div>
      <Header name=""/>
      <div className="App-content">
        <Button name={btn_1} link="motor" />
        <Button name={btn_2} link="projector" />
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomeView