import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Box } from "@mui/material";
import { TextField } from "formik-mui";
import { editProfile } from "../../containers/editProfile/api/crud";
import { useMutation } from 'react-query';

import "./style.css"

const EditProfile = ({user}) => {

  const schema = Yup.object().shape({
		name: Yup.string().required('Required field!'),
    email: Yup.string().email('Incorrect email').required('Required field!'),
		phone: Yup.string().matches(10, '+380')
	});

  const initialState = {
    name: user?.name,
    phone: user?.phone,
    email: user?.email,
  };

  const mutation = useMutation((data) =>
  editProfile(post[0].userprofileid, data)
);

const onFormSubmit = async (values) => {
  alert("User edit with values:" + JSON.stringify(values));
  mutation.mutate({
    name: values.name,
    email: values.email,
    phone: values.phone,
  })
};
  
  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ submitForm, resetForm, isSubmitting }) => (
        <Form>
          <div className="postForm">
          <Box width={500}>
            <Field
              component={TextField}
              helperText="Please Enter Name"
              className="textfield"
              label="Name"
              name="name"
              margin="normal"
            />
            <Field
              component={TextField}
              helperText="Please Enter Email"
              className="textfield"
              label="email"
              name="email"
              margin="normal"
            />
            <Field
              component={TextField}
              helperText="Please Enter Phone in formay "
              className="textfield"
              label="phone"
              name="phone"
              margin="normal"
            />
          </Box>

          <div className="buttons">
            <Button
              sx={{ margin: "10px 5px" }}
              color="secondary"
              variant="contained"
              disabled={isSubmitting}
              onClick={() => {
                resetForm();
              }}
            >
              Reset
            </Button>
            <Button
              sx={{ margin: "10px 5px" }}
              color="primary"
              variant="contained"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Edit
            </Button>
          </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Profile.propTypes = ProfilePropType;

export default EditProfile;