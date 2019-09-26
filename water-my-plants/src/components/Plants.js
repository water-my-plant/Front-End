// create watering schedule
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const PlantForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 1.5rem 0;
  margin: 3rem auto;
  background-color: #d4d4aa;
  color: #000;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;

const FieldInput = styled(Field)`
  margin: 1rem auto;
  width: 70%;
  height: 2rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #666633;
  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: #fff;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Error = styled.p`
  width: 70%;
  height: 1.5rem;
  font-size: 0.75rem;
  text-align: center;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 5px 10px;
  margin: -8px auto -1rem;
  z-index: 3;
`;

const NewPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  useEffect(() => {
    if (status) {
      addNewPlant([...newPlant, status]);
    }
  }, [status]);

  return (
    <>
      <Heading>Add a Plant!</Heading>
      <PlantForm>
        {touched.plant_name && errors.plant_name && (
          <Error className="error">{errors.plant_name}</Error>
        )}
        <FieldInput type="text" name="plant_name" placeholder="Plant Name" />

        {touched.plant_species && errors.plant_species && (
          <Error className="error">{errors.plant_species}</Error>
        )}
        <FieldInput type="text" name="plant_species" placeholder="Species" />

        {touched.water_schedule && errors.water_schedule && (
          <Error className="error">{errors.water_schedule}</Error>
        )}
        <FieldInput
          type="text"
          name="water_schedule"
          placeholder="Water Schedule"
        />

        <Button type="submit">Submit!</Button>
      </PlantForm>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      plant_name: values.plant_name || "",
      plant_species: values.plant_species || "",
      water_schedule: values.water_schedule || ""
    };
  },
  validationSchema: yup.object().shape({
    plant_name: yup.string().required("Add plant name"),
    plant_species: yup.string().required("What's it's species?"),
    water_schedule: yup.string().required("Make a Schedule!")
  }),
  handleSubmit: (values, { props, setStatus, resetForm }) => {
    // let addPlant = {
    //   plant: values.plant,
    //   species: values.species,
    //   water_schedule: values.water_schedule
    // };
    axios
      .post("https://water-my-plant-bw.herokuapp.com/api/plants", values)
      .then(response => {
        console.log(response.data);
        setStatus(response.data);
        resetForm();
        return props.history.push("/home");
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
})(NewPlant);
