import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
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

const Input = styled(Field)`
  margin: 1rem auto;
  width: 70%;
  height: 2rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #666633;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
const Label = styled.label`
  margin: 1rem auto;
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
        <Input type="text" name="password" placeholder="password" />

        {touched.password2 && errors.password2 && (
          <Error>{errors.password2.slice(49, 69)}</Error>
        )}
        <Input type="text" name="password2" placeholder="confirm password" />

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
