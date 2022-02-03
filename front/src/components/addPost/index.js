import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Box } from "@mui/material";
import { TextField } from "formik-mui";
import { addPost, updatePost } from "../../containers/post/api/crud";
import AddPostPropType from "../propTypes/addPostPropTypes";

import "./style.css";


const AddPost = () => {

  const initialState = {
  userprofileid: 5,
  content: "",
  hlevel: 1,
};


  const schema = Yup.object().shape({
    content: Yup.string().required("Field is empty!"),
    hlevel: Yup.number("Age must be a number")
      .required("Age is required!")
      .positive("Age must be > 0")
      .integer(),
  });

  const onFormSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ values, submitForm, resetForm, isSubmitting, errors }) => (
        <Form>
          <Box width={500}>
            <Field
              component={TextField}
              helperText="Please Enter Text"
              className="textfield"
              label="POST"
              name="content"
              margin="normal"
              fullWidth
              multiline
              rows="5"
            />
          </Box>
          <div>Hidden Level Post</div>
          <label>
            <Field type="radio" name="hlevel" value="1" />
            Only me
          </label>
          <label>
            <Field type="radio" name="hlevel" value="2" />
            Friends
          </label>
          <label>
            <Field type="radio" name="hlevel" value="3" />
            All
          </label>
          <div>Hidden Level: {values.hlevel}</div>
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
              Post
            </Button>
          </div>
          <div className="errors">Errors: {JSON.stringify(errors)}</div>
        </Form>
      )}
    </Formik>
  );
};

AddPost.propTypes = AddPostPropType;

export default AddPost;
