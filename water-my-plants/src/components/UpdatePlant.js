<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
=======
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
>>>>>>> d15720a459c0c58cca86f3a9ba2c631ca8d4f844

const Body = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const PlantForm = styled(Form)`
<<<<<<< HEAD
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
=======
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
>>>>>>> d15720a459c0c58cca86f3a9ba2c631ca8d4f844
  margin: 100px auto 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: left;
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 250, 250, 0.8);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background-color: #666633;
  }
`;

const FieldInput = styled(Field)`
  margin-top: 32px;
  padding: 0.8rem;
  width: 90%;
  display: block;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  max-width: 150px;
  text-align: center;
  border-style: none;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 12px 20px;
  margin: 32px 0;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
  background-color: #d4d4aa;
`;

const UpdatePlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  useEffect(() => {
    if (status) {
      addNewPlant([...newPlant, status]);
    }
  }, [newPlant, status]);

  return (
    <Body>
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

        <Button type="submit">Submit!</Button>
      </PlantForm>
    </Body>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
<<<<<<< HEAD
      plant: values.plant || '',
      species: values.species || '',
      water: values.water || ''
=======
      plant: values.plant || "",
      species: values.species || "",
      water: values.water || ""
>>>>>>> d15720a459c0c58cca86f3a9ba2c631ca8d4f844
    };
  },
  validationSchema: yup.object().shape({
    plant: yup.string(),
    species: yup.string(),
    water: yup.string()
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
<<<<<<< HEAD
      .put('https://water-my-plant-bw.herokuapp.com/api/plants', values)
=======
      .put("https://water-my-plant-bw.herokuapp.com/api/plants", values)
>>>>>>> d15720a459c0c58cca86f3a9ba2c631ca8d4f844
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
<<<<<<< HEAD
        console.log('Error:', error);
=======
        console.log("Error:", error);
>>>>>>> d15720a459c0c58cca86f3a9ba2c631ca8d4f844
      });
  }
})(UpdatePlant);
