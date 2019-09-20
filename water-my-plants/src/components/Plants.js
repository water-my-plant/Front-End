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

const NewPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  return (
    <PlantForm>
      {touched.plant && errors.plant && <p className="error">{errors.plant}</p>}
      <Field type="text" name="plant" placeholder="Plant Name" />

      {touched.species && errors.species && (
        <p className="error">{errors.species}</p>
      )}
      <Field type="text" name="species" placeholder="Species" />

      {touched.water && errors.water && <p className="error">{errors.water}</p>}
      <Field type="text" name="water" placeholder="Water Schedule" />

      <button>Submit!</button>
    </PlantForm>
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
    water: yup.string().required("Diet is required")
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
