import React from "react";
import { Route } from "react-router-dom";
import * as decode from 'jwt-decode'

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPlant from "./components/Plants";

function App() {
  const token = localStorage.getItem('token')
  const expired = decode(token).exp < Date.now()/1000
  console.log(expired)

  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/plants" component={NewPlant} />
    </div>
  );
}

export default App;