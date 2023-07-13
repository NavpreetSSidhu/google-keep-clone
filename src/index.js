import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const root = createRoot(document.getElementById("root"));

root.render(<App/>);