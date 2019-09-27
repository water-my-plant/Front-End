import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

import { 
  Input,
  Heading,
  FormDiv,
  Button ,
  Error
} from './StyledComponents'

const Label = styled.label`
  margin: 1rem auto;
`;

const SignUp = props => {
  const { errors, touched, values } = props;
  return (
    <>
      <Heading>Sign Up</Heading>
      <FormDiv>
        {touched.fullname && errors.fullname && (
          <Error>{errors.fullname}</Error>
        )}
        <Input type="text" name="fullname" placeholder="fullname" />

        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="username" />

        {touched.phonenumber && errors.phonenumber && (
          <Error>{errors.phonenumber}</Error>
        )}
        <Input type="text" name="phonenumber" placeholder="phone number" />

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Input type="password" name="password" placeholder="password" />

        {touched.password2 && errors.password2 && (
          <Error>{errors.password2.slice(49, 69)}</Error>
        )}
        <Input type="password" name="password2" placeholder="confirm password" />

        {touched.termsOfService && errors.termsOfService && (
          <Error>{errors.termsOfService.slice(58, 96)}</Error>
        )}
        <Label>
          <Field
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
          />
          <span>Terms of Service</span>
        </Label>
        <Button type="submit">Sign Up</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      fullname: values.fullname || "",
      username: values.username || "",
      password: values.password || "",
      password2: values.password2 || "",
      phonenumber: values.phonenumber || "",
      termsOfService: values.termsOfService || false
    };
  },
  validationSchema: yup.object().shape({
    fullname: yup
      .string()
      .max(40, "enter no more than 40 characters")
      .required(),
    username: yup
      .string()
      .min(5, "your username must have at least 5 characters")
      .required(),
    password: yup
      .string()
      .min(8, "password must be at least 8 characters")
      .required("enter and confirm password"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null, "passwords must match"])
      .required(),
    phonenumber: yup
      .number()
      .positive()
      .required(),
    termsOfService: yup
      .boolean()
      .oneOf([true, "you must agree to the terms of service"])
      .required()
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    let userObj = {
      fullname: values.fullname,
      username: values.username,
      password: values.password,
      phonenumber: values.phonenumber
    };
    axios
      .post(
        "https://water-my-plant-bw.herokuapp.com/api/auth/register",
        userObj
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        return props.history.push("/home");
      })
      .catch(err => {
        return err.response;
      });
  }
})(SignUp);
