import { Link, Outlet } from "react-router-dom";

const btn_1 = 'Motor Controller';
const btn_2 = 'Projector Controller';


function Button(props) {
  
  return (
      <Link to={"/" + props.link}>
        <button className="home-btn">{props.name}</button>
      </Link>
  );
}

function HomeView (props) {
  
  return (
    <div className="Home-content">
      <h1>Home</h1>
      <div >
        <Button name={btn_1} link="motor" />
        <Button name={btn_2} link="projector" />
      </div>
    </div>
   
  );
}

export default HomeView