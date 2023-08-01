import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import {robots} from './robots.js' //In this case there is only one object robots but it could have other objects in robots.js but we only wanted robots so we selected that one, but other objects would be selected from the same file, for example {cats}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
