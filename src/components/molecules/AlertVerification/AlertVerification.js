import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { customMedia } from '../../Layouts';

const AlertVerification = () => {
  const [closeAlert, setCloseAlert] = useState(false);
  const userState = useSelector((state) => state.userReducer.data);

  if (closeAlert) {
    return null;
  }

  if (userState.verified === 0) {
    return (
      <>
        <Wrapper>
          <div className="content">
            <p className="text">
              Check your email to verify your account and access all of our best
              features.
            </p>
            <HighlightOffIcon
              className="btn-wrapper"
              onClick={() => setCloseAlert(true)}
            />
          </div>
        </Wrapper>
      </>
    );
  }

  return null;
};

export default AlertVerification;

const Wrapper = styled.div`
  background-color: #ffa600;
  .content {
    width: 80%;
    margin: 0 auto;
    height: 1rem;
    padding: 12px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${customMedia.lessThan('laptop')`
      /* for screen sizes less than 1280px */
      width: 90%;
    `}
    ${customMedia.lessThan('tablet')`
      /* for screen sizes less than 768px */
      width: 95%;
    `}
    .text {
      color: #494949;
      font-weight: 600;
      font-size: 1.2rem;
      margin: 0;
    }
    .btn-wrapper {
      path {
        fill: #494949;
      }
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;
