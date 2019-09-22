// create watering schedule
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const PlantForm = styled(Form)`
  margin: 30px 20px 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  height: 350px;
  width: 350px;
  background-color: rgba(255, 250, 250, 0.8);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const FieldInput = styled(Field)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
`;

const NewPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  useEffect(() => {
    if (status) {
      addNewPlant([...newPlant, status]);
    }
  }, [newPlant, status]);

  return (
    <>
      <PlantForm>
        <h1>Add a Plant!</h1>
        {touched.plant && errors.plant && (
          <p className="error">{errors.plant}</p>
        )}
        <FieldInput type="text" name="plant" placeholder="Plant Name" />

        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}
        <FieldInput type="text" name="species" placeholder="Species" />

        {touched.water && errors.water && (
          <p className="error">{errors.water}</p>
        )}
        <FieldInput type="text" name="water" placeholder="Water Schedule" />

        <Button>Submit!</Button>
      </PlantForm>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      plant: values.plant || "",
      species: values.species || "",
      water: values.water || ""
    };
  },
  validationSchema: yup.object().shape({
    plant: yup.string().required("Add plant name"),
    species: yup.string().required("What's it's species?"),
    water: yup.string().required("Make a Schedule!")
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
      .post("", values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
})(NewPlant);
