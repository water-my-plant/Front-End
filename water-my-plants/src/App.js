import React from "react";
import { Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPlant from "./components/Plants";

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/plants" component={NewPlant}></Route>
    </div>
  );
}

export default App;
