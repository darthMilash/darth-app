import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useMutation } from 'react-query';
import { Button, Box } from "@mui/material";
import { TextField } from "formik-mui";
import { editPost } from "../../containers/post/api/crud";
import PostPropType from '../propTypes/postPropType';
import FormikAutocomplete from "../FormikAutocomplete";


const EditPost = ({post}) => {
  
  
  const schema = Yup.object().shape({
    content: Yup.string().required("Field is empty!"),
    hiddenlevel: Yup.number()
      .required()
      .positive()
      .integer(),
  });

const mutation = useMutation((data) =>
    editPost(post[0].postid, data)
);

const initialState = {
  content: post[0].content,
};

  const onFormSubmit = async (values) => {
    alert("Post add with values:" + JSON.stringify(values));
    mutation.mutate({
      content: values.content,
      hiddenlevel: values.hiddenlevel
    })
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
      {({ values, submitForm, resetForm, isSubmitting }) => (
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
              Edit
            </Button>
          </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

EditPost.propTypes = PostPropType;

export default EditPost;
