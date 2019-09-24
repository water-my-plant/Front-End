import React from 'react';
import { Route } from 'react-router-dom';
// import * as decode from 'jwt-decode';
import styled from 'styled-components';
import Nav from './components/Nav.js';

import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import NewPlant from './components/Plants';
// import UpdatePlant from './components/UpdatePlant';

const Content = styled.div`
  margin-top: 120px;
`;

function App() {
  // const token = localStorage.getItem('token');
  // const expired = decode(token).exp < Date.now() / 1000;
  // console.log(expired);

  return (
    <div className="App">
      <Nav />
      <Content>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/plants" component={NewPlant} />
      </Content>
    </div>
  );
}

export default App;