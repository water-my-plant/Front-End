import React from "react";
import styled from "styled-components";
import image from "../assets/sapling.png";
import { Heading } from "./StyledComponents";

const WelcomeDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Image = styled.img`
  max-width: 90%;
`;

export default function Welcome() {
  return (
    <WelcomeDiv>
      <Heading>Welcome</Heading>
      <h2>Let's Grow Your Garden</h2>
      <Image src={image} />
    </WelcomeDiv>
  );
}
