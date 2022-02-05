import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from 'react-query';
import { Button, Box } from "@mui/material";
import { TextField } from "formik-mui";
import { addPost, updatePost } from "../../containers/post/api/crud";
import AddPostPropType from "../propTypes/addPostPropTypes";

import "./style.css";


const AddPost = () => {

  const initialState = {
  userprofileid: 5,
  content: "",
  hiddenlevel: 1,
};

const mutation = useMutation((data) =>
addPost(data)
);


  const schema = Yup.object().shape({
    userprofileid: Yup.number().required().positive().integer(),
    content: Yup.string().required("Field is empty!"),
    hiddenlevel: Yup.number()
      .required()
      .positive()
      .integer(),
  });

  const onFormSubmit = async (values) => {
    alert("Post add with values:" + JSON.stringify(values));
    mutation.mutate(values)
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ values, submitForm, resetForm, isSubmitting, errors }) => (
        <Form>
          <div className="postForm">
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
            <Field type="radio" name="hiddenlevel" value="1" />
            Only me
          </label>
          <label>
            <Field type="radio" name="hiddenlevel" value="2" />
            Friends
          </label>
          <label>
            <Field type="radio" name="hiddenlevel" value="3" />
            All
          </label>
          <div>Hidden Level: {values.hiddenlevel}</div>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddPost.propTypes = AddPostPropType;

export default AddPost;
