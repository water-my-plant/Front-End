import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  margin: 20px;
  padding: 10px;
  background-color: #666633;
  color: #fff;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const PlantName = styled.h3`
  font-size: 2rem;
  margin: 0 0 10px 0;
`;

const Species = styled.h3`
  font-size: 1.17rem;
  margin: 0 0 5px 0;
  font-style: italic;
  color: ;
`;

const Schedule = styled.h3`
  font-size: 1.17rem;
  margin: 0 0 10px 0;
`;

export default function PlantCard(props) {
  return (
    <Card>
      <PlantName>{props.name}</PlantName>
      <Species>{props.species}</Species>
      <Schedule>Watering schedule: {props.schedule}</Schedule>
      <button value={props.value} onClick={props.removePlant}>
        Delete
      </button>
    </Card>
  );
}
