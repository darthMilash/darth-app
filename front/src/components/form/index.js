import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
            <div>Errors: {JSON.stringify(errors)}</div>
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <Field type="text" name="age" />
            <button type="submit">Save</button>
        </Form>
        }
        </Formik>
    )
}

export default UserForm;