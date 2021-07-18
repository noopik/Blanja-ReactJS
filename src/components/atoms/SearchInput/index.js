import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import { customMedia } from '../../Layouts/BreakPoints';
import WrapperSearchInput from './WrapperSearchInput';

const Wrapper = styled.div`
  /* background-color: yellowgreen; */
  width: 100%;
  height: 40px;

  .wrapper {
    display: flex;
    /* display: none;  */
    gap: 1rem;
    /* background-color: yellow; */
    ${customMedia.lessThan('laptop')`
        /* for screen sizes less than 1280px */ 
      // background-color: cyan; 
      margin-left: 0; 
      width: 100%;
    `}
    width: 80%;
    margin-left: 60px;
  }
  .icon-filter:hover {
    cursor: pointer;
  }
  .icon-filter:hover path {
    stroke: ${colors.primary};
  }
`;

const SearchInput = ({
  onChange,
  value,
  className,
  placeholder,
  session,
  actionSearch,
}) => {
  return (
    <Wrapper className={className}>
      {session !== 'seller' && (
        <div className="wrapper">
          <WrapperSearchInput
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            actionSearch={actionSearch}
          />
          <div className="icon-filter">
            <svg
              class="stroke"
              width="40"
              height="40"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z"
                stroke="#8E8E93"
                stroke-width="1"
              />
              <path
                d="M29.3333 13.5H12.6667L19.3333 21.3833V26.8333L22.6667 28.5V21.3833L29.3333 13.5Z"
                stroke="#8E8E93"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SearchInput;
