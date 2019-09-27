import React from "react";
import { NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 5;
  background-color: #595959;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (min-width: 700px) {
    height: 100px;
  }
`;

const Heading = styled(NavLink)`
  -webkit-text-decoration: none;
  text-decoration: none;
  order: 2;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin: 14px 10px;
  @media (min-width: 700px) {
    order: 0;
    flex: 1;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    width: auto;
    flex: 2;
  }
`;

const MainLink = styled(NavLink)`
  color: #fff;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  padding: 15px 10px;
  &.active {
    color: #666633;
    background-color: #fff;
  }
`;

const LoginButtons = styled.div`
  order: 3;
  max-width: 220px;
  text-align: center;
  @media (min-width: 700px) {
    max-width: 150px;
    flex: 1;
  }
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0;
  color: #000;
  margin: 12px 0;
  padding: 5px;
  border-radius: 0.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: #d4d4aa;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Slash = styled.span`
  color: white;
  margin: 5px;
`;

const Button = styled.button`
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0;
  color: #000;
  margin: 12px 20px;
  padding: 5px;
  border-radius: 0.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: #d4d4aa;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default function Nav() {
  return (
    <NavBar>
      <Heading exact to="/">
        Water My Plant
      </Heading>
      <NavLinks>
        <MainLink to="/home">My Plants</MainLink>
        <MainLink to="/plants">Add A Plant</MainLink>
        <MainLink to="/profile">Profile</MainLink>
      </NavLinks>

      <LoginButtons>
        <ButtonLink to="/login">Log In</ButtonLink>
        <Slash>/</Slash>
        <ButtonLink to="/signup">Sign Up</ButtonLink>
        <Button
          onClick={() => {
            let history = createBrowserHistory({ forceRefresh: true });
            localStorage.removeItem("token");
            if (
              history.location.pathname !== "/signup" &&
              history.location.pathname !== "/login"
            ) {
              history.push("/");
            }
          }}
        >
          Log Out
        </Button>
      </LoginButtons>
    </NavBar>
  );
}
