import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { customMedia } from '../../Layouts';

export default function TransitionsModal({ children, className, header, id }) {
  const [open, setOpen] = useState(false);

  const modalState = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const showModal = modalState.isShow;
  // console.log(modalState);

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  const handleClose = () => {
    dispatch({ type: 'SET_MODAL', value: false });
  };
  // console.log('in modal', open);
  const openModal = () => {};

  return (
    <Wrapper
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} id={id}>
        <div className={`paper ${className}`}>
          <div className="header">
            <h1 className="heading">{header}</h1>
          </div>
          <div className="body">{children}</div>
        </div>
      </Fade>
    </Wrapper>
  );
}

const Wrapper = styled(Modal)`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  .paper {
    /* display: flex; */
    /* justify-content: space-between; */
    flex-direction: row;
    align-items: center;
    /* background-color: yellow; */
    width: max-content;
    height: max-content;
    margin-top: 6rem;
    ${customMedia.lessThan('900px')` 
      width: 80%; 
    `}
    ${customMedia.lessThan('630px')` 
      width: 90%; 
    `}
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
    border-radius: 10px;
    .header {
      box-shadow: 0px 0px 6px rgba(53, 50, 50, 0.25);
      border-radius: 8px 8px 0px 0px;
      padding: 22px;
      display: flex;
      justify-content: center;
      .heading {
        font-weight: 500;
        ${customMedia.lessThan('630px')` 
          width: 90%; 
          font-size: 16px;
        `}
        font-size: 22px;
        line-height: 22px;
        color: #222222;
        text-align: center;
      }
    }
    .body {
      padding: 22px;
    }
  }
`;
