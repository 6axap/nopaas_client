import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import './index.css';
import Window from './Window';
import reportWebVitals from './example/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
