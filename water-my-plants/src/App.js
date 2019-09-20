import React from "react";
import "./App.css";
import Home from "./components/Home";
import UserForm from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/form" component={UserForm} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
