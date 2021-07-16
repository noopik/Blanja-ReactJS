import React from 'react';
import styled from 'styled-components';
import { ProfileUser } from '../../../assets/images';
import { Button, Divider, FormInput } from '../../atoms';

const UserFormSetting = ({ session }) => {
  return (
    <Wrapper>
      <Form className="form">
        <div className="form-wrapper">
          <label htmlFor="name">Name</label>
          <FormInput type="text" name="name" value="Johanes" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="email">Email</label>
          <FormInput type="text" name="email" value="johanes@gmail.com" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone">Phone Number</label>
          <FormInput type="text" name="phone" value="089652365" />
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
          <img src={ProfileUser} alt="avatar" />
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
    <label htmlFor="phone">Store Description</label>
    <textarea
      className="text-area"
      name="description"
      placeholder="Product Description"
    ></textarea>
  </div>
);

const FormUser = (
  <>
    <div className="form-wrapper">
      <label htmlFor="phone">Gender</label>
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
    <div className="form-wrapper">
      <label htmlFor="birth">Date of Birth</label>
      {/* <DatePicker /> */}
    </div>
  </>
);

// STYLING CURRENT COMPONENT

const Wrapper = styled.div`
  display: flex;
  width: max-content;
`;

const Form = styled.div`
  &.form {
    .form-wrapper {
      display: flex;
      margin-bottom: 1rem;
      width: max-content;
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
      width: 400px;
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
  &.profile-image {
    width: max-content;
    display: flex;
    margin-left: 64px;
    .vertical {
      width: 2px;
      height: 50%;
    }
    .image-wrapper {
      margin-left: 79px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 110px;
      }
    }
  }
`;
