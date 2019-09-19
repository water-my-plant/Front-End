import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
