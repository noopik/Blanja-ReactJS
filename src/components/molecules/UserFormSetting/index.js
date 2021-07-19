import React from 'react';
import styled from 'styled-components';
import { ProfileUser } from '../../../assets/images';
import { Button, Divider, FormInput } from '../../atoms';
import { customMedia } from '../../Layouts';

const UserFormSetting = ({ session }) => {
  return (
    <Wrapper>
      <Form className="form">
        <div className="form-wrapper">
          <label htmlFor="name" className="name-input">
            Name
          </label>
          <div className="form-input">
            <FormInput
              type="text"
              name="name"
              value="Johanes"
              className="input"
            />
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
              value="johanes@gmail.com"
              className="input"
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
              value="089652365"
              className="input"
            />
          </div>
        </div>
        {session && FormSeller}
        {!session && FormUser}
        <div className="form-wrapper">
          <label />
          {/* <DatePicker /> */}
          <Button className="btn-save" primary>
            Save
          </Button>
        </div>
      </Form>
      <ProfileWrapper className="profile-image">
        <Divider className="vertical" />
        <div className="image-wrapper">
          <img src={ProfileUser} alt="avatar" className="avatar" />
          <Button>Select Image</Button>
        </div>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default UserFormSetting;

// DINAMYC CONTENT

const FormSeller = (
  <div className="form-wrapper">
    <label htmlFor="phone" className="name-input">
      Store Description
    </label>
    <div className="form-input">
      <textarea
        className="text-area"
        name="description"
        placeholder="Product Description"
      ></textarea>
    </div>
  </div>
);

const FormUser = (
  <>
    <div className="form-wrapper">
      <label htmlFor="phone" className="name-input">
        Gender
      </label>
      <div className="form-input">
        <div class="gender">
          <input type="radio" name="gender" id="male" />
          <label class="checkmark-gender-user" for="male">
            Laki - laki
          </label>
        </div>
        <div class="gender">
          <input type="radio" name="gender" id="female" />
          <label class="checkmark-gender-user" for="female">
            Perempuan
          </label>
        </div>
      </div>
    </div>
    <div className="form-wrapper">
      <label htmlFor="birth" className="name-input">
        Date of Birth
      </label>
      <div className="form-input"></div>
      {/* <DatePicker /> */}
    </div>
  </>
);

// STYLING CURRENT COMPONENT

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* background-color: cyan; */
  justify-content: space-between;
  ${customMedia.lessThan('1410px')`
    flex-direction: column-reverse; 
    width: 100%;
  `}/* background-color: yellow; */
`;

const Form = styled.div`
  /* background-color: greenyellow; */
  &.form {
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
        /* background-color: orange; */
        width: 200px;
      }
      .form-input {
        /* background-color: red; */
        width: 100%;
        .input {
          width: 100%;
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
      .gender {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        label {
          /* margin-right: 0; */
          margin: 0;
          margin-left: 1rem;
          width: 80px;
          display: flex;
          justify-content: flex-start;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.8;
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
    margin-left: 0; 
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
