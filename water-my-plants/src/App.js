import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NewPlant from "./components/Plants";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
      <Route path="/plants" component={NewPlant}></Route>
    </div>
  );
}

export default App;
