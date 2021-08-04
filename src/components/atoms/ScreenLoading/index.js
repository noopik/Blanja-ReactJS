import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ANLoading } from '../../../assets/images';

const ScreenLoading = () => {
  const stateLoading = useSelector((state) => state.loadingReducer);

  if (!stateLoading.isShow) {
    return null;
  }

  return (
    <Wrapper>
      <div className="animation">
        <img src={ANLoading} alt="loading" />
      </div>
    </Wrapper>
  );
};

export default ScreenLoading;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: #00000052;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999 !important;
  .animation {
    width: 500px;
    img {
      background-color: transparent;
      width: 100%;
    }
  }
`;
