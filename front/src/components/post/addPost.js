import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useMutation } from 'react-query';
import { Button, Box } from "@mui/material";
import { TextField } from "formik-mui";
import { addPost } from "../../containers/post/api/crud";
import PostPropType from '../propTypes/postPropType';
import FormikAutocomplete from "../FormikAutocomplete";

import "./style.css";


const AddPost = () => {

  const schema = Yup.object().shape({
    userprofileid: Yup.number().required().positive().integer(),
    content: Yup.string().required("Field is empty!"),
    hiddenlevel: Yup.number()
      .required()
      .positive()
      .integer(),
  });

  const initialState = {
    userprofileid: 5,
    content: "",
  };

  const mutation = useMutation((data) =>
    addPost(data)
  );

  const onFormSubmit = async (values) => {
    alert("Post add with values:" + JSON.stringify(values));
    mutation.mutate(values)
  };

  const options = [
    { value: '1', label: 'Only me' },
    { value: '2', label: 'My friends' },
    { value: '3', label: 'All' }
  ]

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ values, submitForm, resetForm, isSubmitting}) => (
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
          <div>
            <Field component={FormikAutocomplete} name="hiddenlevel" label="Visible to" options={options} />
          </div>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddPost.propTypes = PostPropType;

export default AddPost;
