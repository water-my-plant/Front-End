// login / sign up
import React, { useEffect } from 'react'
import { withFormik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'

const FormDiv = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 35rem;
    border: 1px solid black;
    border-radius: .5rem;
    margin: 5rem auto;
    padding-top: 4rem; 
    background-color: RGBA(211, 211, 211, 1);
    -webkit-box-shadow: 0 1rem 1rem black;
    -moz-box-shadow: 0 1rem 1rem black;
    box-shadow: 0 1rem 1rem black;
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
    height: 2rem;
    margin: .5rem auto;
    border-radius: .5rem;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`
const Error = styled.p`
    color: red;
    margin-bottom: -1rem;
    margin-top: -.12rem;
    z-index: 3;
`

const UserForm = (props) => {
    const { errors, touched, status, values } = props
    console.log(values)
    return (
        <FormDiv>
            {touched.fullname && errors.fullname && <Error>{errors.fullname}</Error>}
            <Input type='text' name='fullname' placeholder='fullname' />

            {touched.username && errors.username && <Error>{errors.username}</Error>}
            <Input type='text' name='username' placeholder='username' />

            {touched.phoneNumber && errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
            <Input type='text' name='phoneNumber' placeholder='phoneNumber' />

            {touched.password && errors.password && <Error>{errors.password}</Error>}
            <Input type='text' name='password' placeholder='password' />

            {touched.password2 && errors.password2 && <Error>{errors.password2.slice(49, 69)}</Error>}
            <Input type='text' name='password2' placeholder='password' />

            {touched.termsOfService && errors.termsOfService && <Error>{errors.termsOfService.slice(58, 96)}</Error>}
            <Label>
                <Field type='checkbox' name='termsOfService' checked={values.termsOfService} />
                <span>Terms of Service</span>
            </Label>
            <Button type='submit'>Sign Up</Button>
        </FormDiv>
    )
}

export default withFormik({    
    mapPropsToValues: (values) => {
        return {
            fullname: values.fullname || '',
            username: values.username || '',
            password: values.password || '',
            password2: values.password2 || '',
            phoneNumber: values.phoneNumber || '',
            termsOfService: values.termsOfService || false
        }
    },
    validationSchema: yup.object().shape({
        fullname: yup.string().max(40, 'enter no more than 40 characters').required(),
        username: yup.string().min(5, 'your username must have at least 5 characters').required(),
        password: yup.string().min(8, 'password must be at least 8 characters').required('enter and confirm password'),
        password2: yup.string().oneOf([yup.ref('password'), null, 'passwords must match']).required(),
        phoneNumber: yup.number().positive().required(),
        termsOfService: yup.boolean().oneOf([true, 'you must agree to the terms of service']).required()
    }),
    validateOnChange: false,
    validateOnBlur: false,
    handleSubmit: (values, { setStatus, resetForm }) => {
        console.log(values)
        return resetForm()
    }
})(UserForm)