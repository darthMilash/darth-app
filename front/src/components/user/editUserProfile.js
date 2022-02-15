import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Avatar, Stack } from "@mui/material";
import { TextField } from "formik-mui";
import {editUserAvatar, editUserProfile} from "../../containers/user/api/crud";
import { useMutation } from 'react-query';
import UserProfilePropType from '../propTypes/userProfilePropTypes';
import FormikAutocomplete from "../FormikAutocomplete";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

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
      // editUserAvatar(user[0].avatar, data)
);

  const options = [
    { value: '1', label: 'СумДУ' },
    { value: '2', label: 'СумГПУ им А.С.Макаренка' },
    { value: '3', label: 'СНАУ' }
  ]

  const [image, setImage] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const [cropper, setCropper] = useState();

  const handleChange = e => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.type.match('image.*') && file.size < 10000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      }
      reader.readAsDataURL(file);
    } else {
      console.error('Wrong file format or size!');
    }
  }

  const cropImage = () => {
    if (typeof cropper !== 'undefined') {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setImage(null);
    }
  }

  const deleteImage = () => {
    setCroppedImage(null);
    setImage(null);
  }

const onFormSubmit = async (values) => {
  alert("User edit with values:" + JSON.stringify(values));
  mutation.mutate({
    name: values.name,
    email: values.email,
    phone: values.phone,
    avatar: values.avatar,
    usereducationid:  values.usereducationid,
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
            <Avatar alt="Avatar" className="avatar" name ="avatar" src={`http://localhost:3000/${user[0].avatar}`} sx={{ width: 300, height: 300, margin: '10px' }} />
            <div className="buttons">
              {!image && <Button variant="contained" component="label">
                Change avatar
                <input type="file" hidden onChange={handleChange} />
              </Button>}
              {image && <Button variant="contained" onClick={deleteImage}>Delete avatar</Button>}
              {image && (
                  <Cropper
                      src={image}
                      onInitialized={instance => setCropper(instance)}
                      rotatable={false}
                      viewMode={1}
                  />
              )}
              {image && (
                  <Button variant="contained" onClick={cropImage}>Crop</Button>
              )}

            </div>
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
            <div>
              <Field component={FormikAutocomplete} name="usereducationid" label="University" options={options} />
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

EditUserProfile.propTypes = UserProfilePropType;

export default EditUserProfile;