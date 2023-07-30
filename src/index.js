import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import "./index.css"

const root = createRoot(document.getElementById("root"));

root.render(<App/>);