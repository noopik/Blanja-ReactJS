import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardWrapper } from '../../atoms';
import CancelIcon from '@material-ui/icons/Cancel';

const Modal = ({ showModal, closeModal, children }) => {
  console.log(showModal);
  if (!showModal) return null;

  return (
    <>
      <ModalWrapper isShow={showModal}>
        <ContentModal>
          <div className="header">
            <h1 className="title">Modal Title</h1>
            <div onClick={closeModal}>
              <CancelIcon fontSize="large" className="cancel-icon" />
            </div>
          </div>
          {children}
        </ContentModal>
        <BackgroundLayer onClick={closeModal} />
      </ModalWrapper>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
`;

const BackgroundLayer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000052;
  left: 0;
  top: 0;
  padding-top: 5rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
`;

const ContentModal = styled(CardWrapper)`
  width: max-content;
  z-index: 9;
  padding: 0;
  width: 50%;
  max-width: 500px;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0px 0px 6px rgba(53, 50, 50, 0.25);
    border-radius: 8px 8px 0px 0px;
    .title {
      font-size: 2rem;
      margin: 0;
    }
    align-items: center;
    .cancel-icon {
      &:hover {
        cursor: pointer;
      }
    }
  }
  /* .body {
    padding: 1rem;
  } */
`;
