// user can change their username and phone number
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import * as decode from "jwt-decode";

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

const UserProfile = props => {
  const { errors, touched } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // setData(decode(token));
    let key = decode(localStorage.token);
    axios
      .get(`https://water-my-plant-bw.herokuapp.com/api/users/${key.sub}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //   console.log(data);

  return (
    <>
      <Heading>Profile</Heading>
      <div>
        <p>
          username: {data.username}, phone number: {data.phonenumber}
        </p>
      </div>
      <FormDiv>
        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="Username" />

        {touched.phonenumber && errors.phonenumber && (
          <Error>{errors.phonenumber}</Error>
        )}
        <Input type="text" name="phonenumber" placeholder="Phone Number" />

        <Button type="submit">Update</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "",
      phonenumber: values.phonenumber || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    phonenumber: yup.string().required()
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    let key = decode(localStorage.token);
    // console.log(key);
    axios
      .put(
        `https://water-my-plant-bw.herokuapp.com/api/users/${key.sub}`,
        values
      )
      .then(res => {
        props.setData(res.data);
        console.log(props);
        resetForm();
        props.location.reload();
      })
      .catch(err => {
        return err.response;
      });
  }
})(UserProfile);
