import React from "react";

export default function PlantCard(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
      <h3>{props.schedule}</h3>
    </>
  );
}
