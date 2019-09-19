// login / sign up
import React, { useEffect } from 'react'
import { withFormik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'

const UserForm = (props) => {
    return (
        <Form>
            {touched.user && errors.user && <p className='error'>{errors.user}</p>}
            <Field type='text' name='fullname' placeholder='fullname' />

            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
            <Field type='text' name='username' placeholder='username' />

            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
            <Field type='text' name='password' placeholder='password' />

            
            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
            <Field type='text' name='password' placeholder='password' />

            {touched.termsOfService && errors.termsOfService && <p className='error'>{errors.termsOfService}</p>}
            <label>
                <Field type='checkbox' name='termsOfService' checked={values.termsOfService} />
                <span>Terms of Service</span>
            </label>
            <button type='submit'>Submit</button>
        </Form>
    )
}