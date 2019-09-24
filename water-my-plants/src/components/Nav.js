import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 5;
  background-color: #595959;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Nav() {
  return (
    <NavBar>
      <NavLink to="/home" className="item">
        My Plants
      </NavLink>
      <NavLink to="/plants" className="item">
        Add A Plant
      </NavLink>
      <NavLink to="/login" className="item">
        Log In
      </NavLink>
      <NavLink to="/signup" className="item">
        Sign Up
      </NavLink>
    </NavBar>
  );
}
