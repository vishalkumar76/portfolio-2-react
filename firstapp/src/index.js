import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import FirstComponent,{Demo,Demo2} from './FirstComponent';
import Gallery from './Gallery';

import Task from './Task';

import Demo22 from './Demo22';
import InlineCss from './InlineCss';
import Navbar2 from './Navbar2';
import Card2 from './Card2';

import Rating from './Rating';
import Increment from './Increment';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Increment count='12'/>
    

    <Rating/>

    <Navbar2/>

    <Card2/>

    

    <InlineCss/>
    <Demo22/>
    
    <Task/>
    <Gallery url="images/doorstep.jpg"/>
    <App />
    <Demo/>
    <Demo2/>
    <Gallery/>
    <FirstComponent></FirstComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
