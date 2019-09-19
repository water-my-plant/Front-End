// create watering schedule
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const NewPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  return (
    <Form>
      {touched.plant && errors.plant && <p className="error">{errors.plant}</p>}
      <Field type="text" name="plant" placeholder="Plant Name" />

      {touched.species && errors.species && (
        <p className="error">{errors.species}</p>
      )}
      <Field type="text" name="species" placeholder="Species" />

      {touched.water && errors.water && <p className="error">{errors.water}</p>}
      <Field type="text" name="water" placeholder="Water Schedule" />

      <button>Submit!</button>
    </Form>
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
