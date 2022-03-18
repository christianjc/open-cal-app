import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomeView from './routes/HomeView';
import MotorView from "./routes/MotorView";
import ProjectorView from './routes/ProjectorView';

import './css/index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path='/' element={<HomeView/>}/>
          <Route path="motor" element={<MotorView/>} />
          <Route path="projector" element={<ProjectorView/>} />
        </Route>
      </Routes> 
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
