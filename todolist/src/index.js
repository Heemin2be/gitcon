import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

//"root": index.html 속 루트를 말함
const container = document.getElementById("root"); 
const root = ReactDOM.createRoot(container);
root.render(<App />)