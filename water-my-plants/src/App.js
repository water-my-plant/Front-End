import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import NewPlant from "./components/Plants";
import UpdatePlant from "./components/UpdatePlant";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
      <Route path="/plants" component={NewPlant}></Route>
      <Route path="/updateplant" component={UpdatePlant}></Route>
    </div>
  );
}

export default App;
