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
  const userState = useSelector((state) => state.userReducer.data);
  const [previewAvatar, setPreviewAvatar] = useState(userState.imageUrl);
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
    description: yup.string().max(250, 'Description maximum 250 character'),
  });

  const handlePriviewImage = (event) => {
    const fileUploadImage = event.target.files[0];
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
            <div className="form-input-wrapper">
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
                    placeholder="Add phone number"
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
                    {errors.description &&
                      touched.description &&
                      errors.description && (
                        <AlertValidationForm message={errors.description} />
                      )}
                  </div>
                </div>
              )}
              {!session && <FormUser />}
              <div className="form-wrapper">
                <label />
                {/* <DatePicker /> */}
                <Button
                  className="btn-save"
                  type="submit"
                  // disabled={
                  //   !isValid ||
                  //   (Object.keys(touched).length === 0 &&
                  //     touched.constructor === Object)
                  // }
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
                  {(previewAvatar || userState.imageUrl) && (
                    <img
                      src={previewAvatar ? previewAvatar : userState.imageUrl}
                      alt={userState.name}
                      className="avatar"
                    />
                  )}
                  {!userState.imageUrl && !previewAvatar && (
                    <img
                      src={AvatarDefault}
                      alt={userState.name}
                      className="avatar"
                    />
                  )}
                </div>
                <div className="select-avatar">
                  <Button type="submit" className="btn">
                    Select Image
                  </Button>
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
  justify-content: space-between;
  ${customMedia.lessThan('1410px')`
    flex-direction: column-reverse; 
    width: 100%;
  `}
`;

const Form = styled.form`
  &.form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 32px;
    ${customMedia.lessThan('1126px')`
      flex-direction: column-reverse;
    `}
    ${customMedia.lessThan('534px')`
       gap:0px;
    `}
    .form-input-wrapper {
      flex: 1;
      .form-wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        ${customMedia.lessThan('1410px')`
          margin-top: 1rem;
          width: 100%;
        `}
        ${customMedia.lessThan('534px')`
          flex-direction: column;
        `}
        .name-input {
          width: 200px;
          text-align: right;
          ${customMedia.lessThan('647px')`
            width: 100px;
          `}
          ${customMedia.lessThan('534px')`
            text-align: left;
            width: 100%;
            margin-right: 0;
            justify-content: flex-start;
          `}
        }
        .form-input {
          width: 100%;
          .gender-wrapper {
            display: flex;
            flex-direction: row;
          }
          .input {
            width: 100%;
            margin-bottom: 1rem;
            ${customMedia.lessThan('534px')` 
              margin-bottom: 0;
            `}
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
        }
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
  ${customMedia.lessThan('1410px')`
    /* for screen sizes less than 1280px */
    // width: 100%; 
  `}
  /* RESPONSIVE lesstThan 1015px */
  &.profile-image {
    display: flex;
    gap: 32px;
    /* RESPONSIVE lesstThan 1015px */
    ${customMedia.lessThan('1410px')` 
      justify-content: center; 
    `}
    .vertical {
      width: 2px;
      height: 80%;
    }
    .image-wrapper {
      padding: 0 60px;
      ${customMedia.lessThan('1410px')`
         padding: 0 30px;
      `}
      .avatar-wrapper {
        img {
          border-radius: 100%;
          width: 150px;
          height: 150px;
        }
      }
      .select-avatar {
        position: relative;
        .btn {
          &:hover {
            cursor: pointer;
          }
        }
        input {
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          opacity: 0;
        }
      }
      .avatar {
        width: 150px;
      }
      display: flex;
      flex-direction: column;
      gap: 1rem;
      img {
        width: 110px;
      }
    }
  }
`;
