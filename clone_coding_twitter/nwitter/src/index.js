import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./components/App";
// import reportWebVitals from './reportWebVitals';
import { app } from "./firebase"; // firebase.js에서 export된 `app` 가져오기

console.log(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
