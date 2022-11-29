import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./styles/personal.css"
import "./styles/header.css"
import "./styles/body.css"
import "./styles/skills.css"
import "./styles/education.css"
import "./styles/experience.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

