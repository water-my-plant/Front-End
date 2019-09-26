import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav.js";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import NewPlant from "./components/Plants";
// import UpdatePlant from './components/UpdatePlant';
import PrivateRoute from './components/PrivateRoute'

const Content = styled.div`
  margin-top: 120px;
`;

function App() {
  return (
    <div className="App">
      <Nav />
      <Content>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path='/profile' component={UserProfile} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path='/plants' component={NewPlant} />
      </Content>
    </div>
  );
}

export default App;