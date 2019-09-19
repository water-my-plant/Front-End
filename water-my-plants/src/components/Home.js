import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

import PlantCard from "./PlantCard";

import { plants } from "../dummyData";

// list of plants

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

  return (
    <div>
      <h1>My Plants</h1>
      {data.map(plant => {
        return (
          <PlantCard
            key={plant.name}
            name={plant.name}
            species={plant.species}
            schedule={plant.schedule}
          />
        );
      })}
    </div>
  );
}
