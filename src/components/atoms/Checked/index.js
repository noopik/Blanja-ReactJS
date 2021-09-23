import React from 'react';
import styled from 'styled-components';

const Checked = ({ checked }) => {
  return (
    <StyledChecked>
      <div className={`box ${checked && 'checked'}`}>
        {checked && <div className="checklist"></div>}
      </div>
    </StyledChecked>
  );
};

export default Checked;

const StyledChecked = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  .box {
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 4px;

    &:hover {
      background-color: #ccc;
    }
    &.checked {
      background: #db3022;
      display: flex;
      align-items: center;
      justify-content: center;
      .checklist {
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
`;
