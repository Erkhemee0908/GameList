import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAWWgbsUV0Bf14mjPfMnIkAmvbscjF8dfA",
  authDomain: "gamelist-f00b7.firebaseapp.com",
  projectId: "gamelist-f00b7",
  storageBucket: "gamelist-f00b7.appspot.com",
  messagingSenderId: "381261455022",
  appId: "1:381261455022:web:f1230226174260276e173f",
  measurementId: "G-SCQ01LKVTY"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
