
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import "./css/App.css"


function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;