import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewPlant from "./components/Plants";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
      <Route path="/plants" component={NewPlant} />
    </div>
  );
}

export default App;
