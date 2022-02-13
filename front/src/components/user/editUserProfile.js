import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Avatar, Stack } from "@mui/material";
import { TextField } from "formik-mui";
import { editUserProfile } from "../../containers/user/api/crud";
import { useMutation } from 'react-query';

import "./style.css"

const EditUserProfile = ({user}) => {



  const schema = Yup.object().shape({
		name: Yup.string().required('Required field!'),
    email: Yup.string().email('Incorrect email').required('Required field!'),
		phone: Yup.string()
	});

  const initialState = {
    name: user[0].name,
    phone: user[0].phone,
    email: user[0].email,
    avatar: user[0].avatar,
  };

  const mutation = useMutation((data) =>
      editUserProfile(user[0].userprofileid, data)
);

const onFormSubmit = async (values) => {
  alert("User edit with values:" + JSON.stringify(values));
  mutation.mutate({
    name: values.name,
    email: values.email,
    phone: values.phone,
    avatar: values.avatar
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
          <div className="userProfileForm">
          <Stack sx={{ margin: "0 0 0 65px"}}>
            <Avatar alt="Avatar" className="avatar" sx={{ width: 300, height: 300, margin: '10px' }} />
            <div className="inputField">
            <Field
              component={TextField}
              helperText="Please Enter Name"
              className="textfield"
              label="Name"
              name="name"
              margin="normal"
              fullWidth
              multiline
            />
            </div>
            <div className="inputField">
            <Field
              component={TextField}
              helperText="Please Enter Email"
              className="textfield"
              label="email"
              name="email"
              margin="normal"
              fullWidth
              multiline
            />
            </div>
            <div className="inputField">
            <Field
              component={TextField}
              helperText="Please Enter Phone in formay "
              className="textfield"
              label="phone"
              name="phone"
              margin="normal"
              fullWidth
              multiline
            />
            </div>
          </Stack>

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

export default EditUserProfile;