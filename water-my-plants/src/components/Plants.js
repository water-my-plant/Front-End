// create watering schedule
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik } from "formik";
import * as yup from "yup";

import { FormDiv, Heading, Input, Button, Error } from "./StyledComponents";

const NewPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  useEffect(() => {
    if (status) {
      addNewPlant([...newPlant, status]);
    }
  }, [newPlant, status]);

  return (
    <>
      <Heading>Add a Plant!</Heading>
      <FormDiv>
        {touched.plant_name && errors.plant_name && (
          <Error className="error">{errors.plant_name}</Error>
        )}
        <Input type="text" name="plant_name" placeholder="Plant Name" />

        {touched.plant_species && errors.plant_species && (
          <Error className="error">{errors.plant_species}</Error>
        )}
        <Input type="text" name="plant_species" placeholder="Species" />

        {touched.water_schedule && errors.water_schedule && (
          <Error className="error">{errors.water_schedule}</Error>
        )}
        <Input type="text" name="water_schedule" placeholder="Water Schedule" />

        <Button type="submit">Submit!</Button>
      </FormDiv>
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
