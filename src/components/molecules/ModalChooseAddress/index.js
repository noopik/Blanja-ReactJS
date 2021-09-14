import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import {
  AlertValidationForm,
  BtnNewAddres,
  Button,
  FormInput,
  InputCheck,
} from '../../atoms';
import UserAddressCard from '../UserAddressCard';
import { Text } from '../../atoms/Typography';
import * as yup from 'yup';
import { Formik } from 'formik';
import { phoneRegExp } from '../../../utils';

const ModalChooseAddress = () => {
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);
  const validationForm = yup.object({
    saveAddress: yup.string().required('Name is required'),
    name: yup.string('Name is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
      .min(11, 'Password must be at least 11 charaters')
      .max(13, 'Password must be less than 13 charaters'),
    store: yup.string().required('Store is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    primary: yup.bool(),
    postalCode: yup
      .number()
      .typeError('Postal code be a number')
      .required('Postal code is required'),
  });
  return (
    <>
      <WrapperModal>
        <BtnNewAddres onClick={() => setShowAddNewAddress(true)} />
        <UserAddressCard onClick={() => setShowAddNewAddress(true)} />
      </WrapperModal>
      <Modal
        showModal={showAddNewAddress}
        closeModal={() => setShowAddNewAddress(false)}
        title="Add New Address"
        size="large"
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={validationForm}
          onSubmit={(values) => {
            console.log(values);
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
            <ContentAddNewAddress>
              <div className="form-wrapper">
                <label className="label">
                  Save address as (ex : home address, office address)
                </label>
                <div className="form-input">
                  <FormInput
                    type="text"
                    name="saveAddress"
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.saveAddress}
                  />
                  {errors.saveAddress &&
                    touched.saveAddress &&
                    errors.saveAddress && (
                      <AlertValidationForm message={errors.saveAddress} />
                    )}
                </div>
              </div>
              <div className="form-wrapper middle">
                <div className="middle">
                  <label className="label">Recipient’s name</label>
                  <div className="form-input">
                    <FormInput
                      type="text"
                      name="name"
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
                <div className="middle">
                  <label className="label">Recipient's telephone number</label>
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
              </div>
              <div className="form-wrapper middle">
                <div className="middle">
                  <label className="label">Address</label>
                  <div className="form-input">
                    <FormInput
                      type="text"
                      name="address"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    {errors.address && touched.address && errors.address && (
                      <AlertValidationForm message={errors.address} />
                    )}
                  </div>
                </div>
                <div className="middle">
                  <label className="label">Postal code</label>
                  <div className="form-input">
                    <FormInput
                      type="text"
                      name="postalCode"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postalCode}
                    />
                    {errors.postalCode &&
                      touched.postalCode &&
                      errors.postalCode && (
                        <AlertValidationForm message={errors.postalCode} />
                      )}
                  </div>
                </div>
              </div>

              <div className="form-wrapper middle">
                <div className="middle">
                  <label className="label">City or Subdistrict</label>
                  <div className="form-input">
                    <FormInput
                      type="text"
                      name="city"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {errors.city && touched.city && errors.city && (
                      <AlertValidationForm message={errors.city} />
                    )}
                  </div>
                </div>
                <div className="middle"></div>
              </div>
              <div className="is-primary-address">
                <div className="checkbox">
                  <InputCheck
                    className="input"
                    name="primary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.primary}
                  />
                </div>
                <Text as="lg" color="secondary">
                  Make it the primary address
                </Text>
              </div>
              <div className="btn-action">
                <Button
                  className="btn"
                  onClick={() => setShowAddNewAddress(false)}
                >
                  Cancel
                </Button>
                <Button
                  primary
                  className="btn"
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                >
                  Save
                </Button>
              </div>
            </ContentAddNewAddress>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalChooseAddress;

const WrapperModal = styled.div`
  margin-top: 1rem;
  box-sizing: content-box;
  padding-bottom: 3rem;
  padding: 1rem;
`;

const ContentAddNewAddress = styled.div`
  padding: 1rem;
  .form-wrapper {
    /* background-color: yellow; */
    margin-bottom: 1rem;
    .label {
      width: 100%;
      margin-bottom: 10px;
    }
    .form-input {
      .input {
        width: 100%;
      }
    }
  }
  .form-wrapper.middle {
    display: flex;
    gap: 1rem;
    .middle {
      width: 100%;
    }
  }
  .is-primary-address {
    display: flex;
    p {
      margin-bottom: 0;
    }
    .checkbox {
      width: 32px;
    }
  }
  .btn-action {
    margin-top: 3rem;
    justify-content: flex-end;
    display: flex;
    gap: 1rem;
    .btn {
      width: 200px;
    }
  }
`;
