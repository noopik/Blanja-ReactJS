import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as yup from 'yup';
import { AvatarDefault } from '../../../assets/images';
import { userUpdateProfile } from '../../../redux/actions';
import { phoneRegExp } from '../../../utils';
import {
  AlertValidationForm,
  Button,
  Divider,
  FormInput,
  Toast,
} from '../../atoms';
import { customMedia } from '../../Layouts';

const UserFormSetting = ({ session, ...props }) => {
  const userState = useSelector((state) => state.userReducer);
  const [previewAvatar, setPreviewAvatar] = useState(userState.image);
  const [uploadFileImage, setUploadFileImage] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const validationForm = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
      .min(11, 'Password must be at least 11 charaters')
      .max(13, 'Password must be less than 13 charaters'),
    description: yup
      .string()
      .required('Name is required')
      .max(250, 'Description maximum 250 character'),
  });

  const handlePriviewImage = (event) => {
    const fileUploadImage = event.target.files[0];
    console.log('fileUploadImage', fileUploadImage);
    if (
      fileUploadImage.type === 'image/jpeg' ||
      fileUploadImage.type === 'image/jpg' ||
      fileUploadImage.type === 'image/png' ||
      fileUploadImage.type === 'image/gif'
    ) {
      if (fileUploadImage.size > 1048576 * 2) {
        Toast('max size file is 2mb', 'error');
      } else {
        setPreviewAvatar(URL.createObjectURL(fileUploadImage));
        setUploadFileImage(fileUploadImage);
      }
    } else {
      Toast('Only image is allowed', 'error');
    }
  };

  // console.log('userState', userState);
  // console.log('userState.name', userState.name);
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: userState.name || '',
          phone: userState.phoneNumber || '',
          description: '',
        }}
        validationSchema={validationForm}
        onSubmit={(values) => {
          const userDataUpdate = {
            ...values,
            image: uploadFileImage,
          };
          dispatch(userUpdateProfile(userDataUpdate, token));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <div>
              <div className="form-wrapper">
                <label htmlFor="name" className="name-input">
                  Name
                </label>
                <div className="form-input">
                  <FormInput
                    name="name"
                    type="text"
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name && (
                    <AlertValidationForm message={errors.name} />
                  )}
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="email" className="name-input">
                  Email
                </label>
                <div className="form-input">
                  <FormInput
                    type="text"
                    name="email"
                    className="input"
                    value={userState.email}
                    disabled
                  />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="phone" className="name-input">
                  Phone Number
                </label>
                <div className="form-input">
                  <FormInput
                    type="text"
                    name="phone"
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && errors.phone && (
                    <AlertValidationForm message={errors.phone} />
                  )}
                </div>
              </div>
              {session && (
                <div className="form-wrapper">
                  <label htmlFor="phone" className="name-input">
                    Store Description
                  </label>
                  <div className="form-input">
                    <textarea
                      className="text-area"
                      name="description"
                      placeholder="Product Description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    ></textarea>
                  </div>
                  {errors.description &&
                    touched.description &&
                    errors.description && (
                      <AlertValidationForm message={errors.description} />
                    )}
                </div>
              )}
              {!session && <FormUser />}
              <div className="form-wrapper">
                <label />
                {/* <DatePicker /> */}
                <Button
                  className="btn-save"
                  type="submit"
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                  primary
                >
                  Save
                </Button>
              </div>
            </div>
            <ProfileWrapper className="profile-image">
              <Divider className="vertical" />
              <div className="image-wrapper">
                <div className="avatar-wrapper">
                  {userState.image && (
                    <img
                      src={previewAvatar ? previewAvatar : userState.image}
                      alt={userState.name}
                      className="avatar"
                    />
                  )}
                  {!userState.image && (
                    <img
                      src={AvatarDefault}
                      alt={userState.name}
                      className="avatar"
                    />
                  )}
                </div>
                <div className="select-avatar">
                  <Button type="submit">Select Image</Button>
                  <input
                    type="file"
                    name="image"
                    onChange={(event) => handlePriviewImage(event)}
                  />
                </div>
              </div>
            </ProfileWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default UserFormSetting;

const FormUser = () => {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="form-wrapper">
        <label htmlFor="phone" className="name-input">
          Gender
        </label>
        <div className="form-input ">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            className="gender-wrapper"
          >
            <div className="gender">
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Laki - laki"
              />
            </div>
            <div className="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Perempuan"
              />
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="birth" className="name-input">
          Date of Birth
        </label>
        <div className="form-input"></div>
      </div>
    </>
  );
};

// STYLING CURRENT COMPONENT

const Wrapper = styled.div`
  width: 100%;
  /* background-color: cyan; */
  justify-content: space-between;
  ${customMedia.lessThan('1410px')`
    flex-direction: column-reverse; 
    width: 100%;
  `}/* background-color: yellow; */
`;

const Form = styled.form`
  /* background-color: greenyellow; */
  &.form {
    display: flex;
    width: 100%;
    .form-wrapper {
      /* background-color: orange; */
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      width: 100%;
      ${customMedia.lessThan('1410px')`
      margin-top: 1rem;
        width: 100%;
        `}
      .name-input {
        width: 200px;
      }
      .form-input {
        .gender-wrapper {
          /* background-color: red; */
          display: flex;
          flex-direction: row;
          .gender {
            /* background-color: yellow; */
          }
        }
        width: 100%;
        .input {
          width: 100%;
          margin-bottom: 1rem;
          /* background-color: yellow; */
        }
        input {
          ${customMedia.lessThan('1410px')`
            margin-top: 1rem;
            width: 100%;
        `}
        }
      }
      label {
        margin-right: 32px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #9b9b9b;
        /* background-color: yellow; */
      }
    }

    .text-area {
      color: #222222;
      border: 1px solid #9b9b9b;
      height: 100px;
      /* width: 400px; */
      width: 100%;
      box-sizing: border-box;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }

    .btn-save {
      width: 100px;
      margin-top: 48px;
    }
  }
`;

const ProfileWrapper = styled.div`
  /* background-color: pink; */
  ${customMedia.lessThan('1410px')`
    /* for screen sizes less than 1280px */
    width: 100%; 
  `}

  /* RESPONSIVE lesstThan 1015px */

  &.profile-image {
    display: flex;
    margin-left: 64px;
    margin-right: 32px;
    /* RESPONSIVE lesstThan 1015px */
    /* background-color: yellow; */
    ${customMedia.lessThan('1586px')`
    // margin-left: 0; 
  `}
    /* RESPONSIVE lesstThan 1015px */ 
  ${customMedia.lessThan('1410px')` 
    justify-content: center; 
  `} 
    ${customMedia.lessThan('1586px')`
    // margin-left: 34px; 
  `}
    .vertical {
      width: 2px;
      height: 80%;
    }
    .image-wrapper {
      .avatar-wrapper {
        img {
          border-radius: 100%;
          width: 150px;
          height: 150px;
        }
      }
      .select-avatar {
        position: relative;
        input {
          display: flex;
          width: 150px;
          height: 150px;
          position: absolute;
          right: 0;
          top: 0;
          opacity: 0;
        }
      }
      .avatar {
        width: 150px;
      }
      margin-left: 79px;
      ${customMedia.lessThan('1586px')`
    /* for screen sizes less than 1280px */
    // margin-left: 34px; 
  `}
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 110px;
      }
    }
  }
`;
