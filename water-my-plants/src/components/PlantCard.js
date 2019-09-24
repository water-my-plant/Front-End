import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

const Card = styled.div`
  text-align: center;
  width: 90%;
  margin: 3rem auto;
  padding: 10px;
  background-color: #d4d4aa;
  color: #000;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #666633;
    color: #fff;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const PlantName = styled.h3`
  font-size: 2rem;
  margin: 0 0 10px 0;
`;

const Info = styled.div`
width: 
  margin: 10px;
  text-align: left;
`;

const Species = styled.h3`
  font-size: 1.17rem;
  margin: 0 0 5px 0;
  font-style: italic;
`;

const Schedule = styled.h3`
  font-size: 1.17rem;
  margin: 0 0 10px 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 50%;
  margin: 10px 10px 20px;
  padding: 10px;
  background-color: #fff;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default function PlantCard(props) {
  return (
    <Card>
      <PlantName>{props.name}</PlantName>
      <FlexContainer>
        <Info>
          <Species>{props.species}</Species>
          <Schedule>Watering schedule: {props.schedule}</Schedule>
        </Info>
        <Button value={props.value} onClick={props.removePlant}>
          <Icon>delete</Icon>
        </Button>
      </FlexContainer>
    </Card>
  );
}
