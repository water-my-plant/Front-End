import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

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

const Login = props => {
  const { errors, touched } = props;

  return (
    <>
      <Heading>Login</Heading>
      <FormDiv>
        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="username" />

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Input type="password" name="password" placeholder="password" />

        <Button type="submit">Login</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || '',
      password: values.password || ''
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    axios
      .post('https://water-my-plant-bw.herokuapp.com/api/auth/login/', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        resetForm();
        return props.history.push('/home');
      })
      .catch(err => {
        return err.response;
      });
  }
})(Login);
