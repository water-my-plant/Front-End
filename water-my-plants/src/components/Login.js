import React from 'react'
import { withFormik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'

const FormDiv = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-bottom: 1rem;
    border: 1px solid black;
    border-radius: .5rem;
    margin: 5rem auto; 
    background-color: #d4d4aa;
    color: #595959;
    -webkit-box-shadow: 0 1rem 1rem black;
    -moz-box-shadow: 0 1rem 1rem black;
    box-shadow: 0 1rem 1rem black;
`
const Heading = styled.h1`
    color: #595959;
    text-align: center;
`
const Input = styled(Field)`
    margin: 1rem auto;
    width: 70%;
    height: 2rem;
    border-radius: .5rem;
    padding: .5rem;
    font-size: 1.5rem;
`
const Label = styled.label`
    margin: 1rem auto;
`
const Button = styled.button`
    width: 30%;
    height: 2.5rem;
    margin: .5rem auto;
    border-radius: .5rem;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    border: 1px solid #595959;
    color: #595959;
    padding-top: .5rem;
    padding-bottom: .5rem;
    &:hover {
        cursor: pointer;
        background: #595959;
        color: #d4d4aa;
    }
`
const Error = styled.p`
    color: red;
    margin-bottom: -1rem;
    margin-top: -.12rem;
    z-index: 3;
`

const Login = (props) => {
    const { errors, touched } = props

    return (
        <FormDiv>
            <Heading>Login to Water My Plants</Heading>

            {touched.username && errors.username && <Error>{errors.username}</Error>}
            <Input type='text' name='username' placeholder='username' />

            {touched.password && errors.password && <Error>{errors.password}</Error>}
            <Input type='text' name='password' placeholder='password' />

            <Button type='submit'>Login</Button>
        </FormDiv>
    )
}

export default withFormik({    
    mapPropsToValues: (values) => {
        return {
            username: values.username || '',
            password: values.password || '',
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    handleSubmit: (values, { props, resetForm }) => {
        axios.post('https://water-my-plant-bw.herokuapp.com/api/auth/login/', values)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                resetForm()
                return props.history.push('/home')
            })
            .catch(err => {
                return err.response
            })
    }
})(Login)