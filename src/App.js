import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import MainComp from "./components/MainComp";

import NavComp from "./components/NavComp";

function App() {
    return (
        <Router>
            <div className="container">
                <NavComp />
                <MainComp />
            </div>
        </Router>
    );
}

export default App;
