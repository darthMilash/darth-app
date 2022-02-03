import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';

const UserForm = ({userData}) => {
    
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string(),
        age: Yup.number('Age must be a number').required('Age is required!').positive('Age must be > 0').integer()
    })

    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <Formik
       initialValues={userData}
       onSubmit={onFormSubmit}
       validationSchema={schema}
     >
         {({errors}) =>

        <Form>
            
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <Field type="text" name="age" />

            <div className="buttons">
            <Button variant="outlined">Cancel</Button>
                <Button variant="contained">Post</Button>
                </div>
            

            <div className="errors">Errors: {JSON.stringify(errors)}</div>


            
        </Form>
        }
        </Formik>
    )
}

export default UserForm;