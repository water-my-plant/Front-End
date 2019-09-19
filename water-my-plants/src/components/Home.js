// list of plants

import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";

import PlantCard from "./PlantCard";

import { plants } from "../dummyData";

const HomeHeader = styled.h1`
  font-size: 3rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Home() {
  const [data, setData] = useState(plants);

  // get plant data from database
  //   useEffect(() => {
  //     axios
  //       .get(``)
  //       .then(response => {
  //         console.log(response.data.results);
  //         // setData(response.data.results);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  const removePlant = event => {
    console.log("delete", event.target.value);
  };

  return (
    <div>
      <HomeHeader>My Plants</HomeHeader>
      <FlexContainer>
        {data.map((plant, id) => {
          return (
            <PlantCard
              value={id}
              key={id}
              name={plant.name}
              species={plant.species}
              schedule={plant.schedule}
              removePlant={removePlant}
            />
          );
        })}
      </FlexContainer>
    </div>
  );
}
