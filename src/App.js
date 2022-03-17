import { useEffect, useState } from "react";
import HomeView from "./views/HomeView";
import MotorView from "./views/MotorView";
import ProjectorView from "./views/ProjectorView";
import { AppContext }  from "./AppContext";
import "./css/App.css"


function App() {
  var displayView = (<HomeView></HomeView>);

  const [view, setView] = useState('Home');
  const [componentView, setComponentView] = useState(<HomeView></HomeView>);
  
  useEffect(() => {
    console.log("running useEffect");
    if (view === 'Home') {
      setComponentView(<HomeView></HomeView>);
      console.log('Home ${componentView}')
    } else if (view === 'MotorView') {
      setComponentView(<MotorView></MotorView>);
      console.log(componentView);
    } else if (view === 'ProjectorView') {
      setComponentView(<ProjectorView></ProjectorView>);
      console.log(componentView);
    }
  },[view])

  return (
    <div>
      <AppContext.Provider value={{view, setView}}>
      {componentView}
      </AppContext.Provider>
    </div>   
  );
}

export default App;