import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { BtnNewAddres, Button, FormInput, InputCheck } from '../../atoms';
import UserAddressCard from '../UserAddressCard';
import { Text } from '../../atoms/Typography';

const ModalChooseAddress = () => {
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);

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
        <ContentAddNewAddress>
          <div className="form-wrapper">
            <label className="label">
              Save address as (ex : home address, office address)
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
          <div className="form-wrapper middle">
            <div className="middle">
              <label className="label">Recipient’s name</label>
              <div className="form-input">
                <FormInput
                  type="text"
                  name="name"
                  value="Johanes"
                  className="input"
                />
              </div>
            </div>
            <div className="middle">
              <label className="label">Recipient's telephone number</label>
              <div className="form-input">
                <FormInput
                  type="text"
                  name="name"
                  value="Johanes"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="form-wrapper middle">
            <div className="middle">
              <label className="label">Address</label>
              <div className="form-input">
                <FormInput
                  type="text"
                  name="name"
                  value="Johanes"
                  className="input"
                />
              </div>
            </div>
            <div className="middle">
              <label className="label">Postal code</label>
              <div className="form-input">
                <FormInput
                  type="text"
                  name="name"
                  value="Johanes"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="form-wrapper middle">
            <div className="middle">
              <label className="label">City or Subdistrict</label>
              <div className="form-input">
                <FormInput
                  type="text"
                  name="name"
                  value="Johanes"
                  className="input"
                />
              </div>
            </div>
            <div className="middle"></div>
          </div>
          <div className="is-primary-address">
            <div className="checkbox">
              <InputCheck className="input" />
            </div>
            <Text as="lg" color="secondary">
              Make it the primary address
            </Text>
          </div>
          <div className="btn-action">
            <Button className="btn" onClick={() => setShowAddNewAddress(false)}>
              Cancel
            </Button>
            <Button primary className="btn">
              Save
            </Button>
          </div>
        </ContentAddNewAddress>
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
