import React from "react";
import styled from "styled-components";

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
  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const PlantName = styled.h3`
  font-size: 2rem;
  margin: 0 0 10px 0;
`;

const Info = styled.div`
  flex: 1;
  margin: 20px 0;
  text-align: center;
  line-height: 1rem;
`;

const Species = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.5;
  text-transform: uppercase;
  margin: 0;
`;

const SpeciesName = styled.span`
  font-size: 1.17rem;
  font-weight: 500;
  font-style: italic;
  text-transform: none;
`;

const Schedule = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.5;
  text-transform: uppercase;
  margin: 0;
`;

const ScheduleTiming = styled.span`
  font-size: 1.17rem;
  font-weight: 500;
  font-style: italic;
  text-transform: none;
`;

const Button = styled.button`
  border: none;
  border-radius: 50%;
  margin: 10px 10px 20px;
  padding: 15px;
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
          <SpeciesName>{props.species}</SpeciesName>
          <Species>Species</Species>
        </Info>
        <Info>
          <ScheduleTiming>{props.schedule}</ScheduleTiming>
          <Schedule>Watering schedule</Schedule>
        </Info>
        <Info>
          <Button
            value={props.value}
            onClick={props.handleDelete}
            className="fas fa-trash fa-lg"
          ></Button>
        </Info>
      </FlexContainer>
    </Card>
  );
}
