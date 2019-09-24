// list of plants

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PlantCard from "./PlantCard";

const HomeHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export default function Home() {
  const [data, setData] = useState([]);

  // get plant data from database
  useEffect(() => {
    axios
      .get(`https://water-my-plant-bw.herokuapp.com/api/plants`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const removePlant = event => {
    console.log("delete", event.target.value);
  };

  // const currentPlant = plants.filter((_, index) => index !== todoIndex);

  return (
    <div>
      <HomeHeader>My Plants</HomeHeader>
      {data.map((plant, id) => {
        return (
          <PlantCard
            value={id}
            key={id}
            name={plant.plant_name}
            species={plant.plant_species}
            schedule={plant.schedule}
            removePlant={removePlant}
          />
        );
      })}
    </div>
  );
}
