// user can change their username and phone number
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import * as decode from "jwt-decode";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1.5rem 0;
  margin: 3rem auto;
  background-color: #d4d4aa;
  color: #000;
`;

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

const SubHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  opacity: 0.5;
  text-transform: uppercase;
  margin: 20px 0;
  text-align: center;
`;

const FlexContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const Info = styled.div`
  flex: 1;
  margin: 20px 0;
  text-align: center;
  line-height: 1rem;
`;

const Item = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.5;
  text-transform: uppercase;
  margin: 0;
`;

const Value = styled.span`
  font-size: 1.17rem;
  font-weight: 500;
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

export default props => {
  const [data, setData] = useState([]);
  const [key] = useState(decode(localStorage.token));
  const [url] = useState(
    `https://water-my-plant-bw.herokuapp.com/api/users/${key.sub}`
  );
  const [config] = useState({
    headers: {
      Authorization: localStorage.token
    }
  });

  useEffect(() => {
    axios
      .get(url, config)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Heading>Hello, {data.username}!</Heading>
      <Div>
        <SubHeading>User Profile</SubHeading>
        <FlexContainer>
          <Info>
            <Value>{data.fullname}</Value>
            <Item>Name</Item>
          </Info>
          <Info>
            <Value>{data.username}</Value>
            <Item>Username</Item>
          </Info>
          <Info>
            <Value>{data.phonenumber}</Value>
            <Item>Phone Number</Item>
          </Info>
        </FlexContainer>
      </Div>

      <Formik
        initialValues={{ username: "", phonenumber: "" }}
        validationSchema={yup.object().shape({
          username: yup.string().required(),
          phonenumber: yup.string().required()
        })}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          let key = decode(localStorage.token);

          axios
            .put(
              `https://water-my-plant-bw.herokuapp.com/api/users/${key.sub}`,
              values,
              config
            )
            .then(res => {
              setData(res.data);
              resetForm();
            })
            .catch(error => {
              console.log(error);
            });
        }}
        render={props => (
          <FormDiv onSubmit={props.handleSubmit}>
            <SubHeading>Update Profile</SubHeading>
            {props.touched.username && props.errors.username && (
              <Error>{props.errors.username}</Error>
            )}
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={props.handleChange}
            />

            {props.touched.phonenumber && props.errors.phonenumber && (
              <Error>{props.errors.phonenumber}</Error>
            )}
            <Input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              onChange={props.handleChange}
            />

            <Button type="submit">Update</Button>
          </FormDiv>
        )}
      />
    </>
  );
};
