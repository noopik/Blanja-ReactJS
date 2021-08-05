import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';

const AlertValidationForm = ({ className, message }) => {
  return (
    <Styles className={className}>
      <InfoIcon className="alert" color="error" />
      <span>{message}</span>
    </Styles>
  );
};

export default AlertValidationForm;

const Styles = styled.div`
  width: 100%;
  padding-top: 4px;
  margin: 0;
  .alert {
    margin: 0;
    padding: 0;
    margin-right: 4px;
    width: 1.2rem;
    height: 1.2rem;
  }
  span {
    color: red;
    font-size: 1rem;
  }
`;
