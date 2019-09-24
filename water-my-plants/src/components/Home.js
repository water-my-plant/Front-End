// list of plants

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PlantCard from "./PlantCard";

const HomeHeader = styled.h1`
  font-size: 3rem;
  font-weight: 300;
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

  return (
    <div>
      <HomeHeader>My Plants</HomeHeader>
      {data.map(plant => {
        return (
          <PlantCard
            key={plant.id}
            name={plant.plant_name}
            species={plant.plant_species}
            schedule={plant.users_id}
          />
        );
      })}
    </div>
  );
}
