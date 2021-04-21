import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenerateBtn from './GenerateBtn';
import reportWebVitals from './reportWebVitals';

const styleArgument = {fontSizze:'100px',color:'red'};

const changeText=(event)=>{
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了了";
}

ReactDOM.render(
  <React.StrictMode>
    <GenerateBtn />
  </React.StrictMode>,
  //<h1 style={styleArgument} onClick={changeText}>Hello CGU!</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
