import React from 'react';
import styled from 'styled-components';
import {} from '../../molecules';
import { BrandLogo, SearchInput } from '../../atoms';
import {} from '../../atoms/Typography';
import { Navbar, Wrapper } from './styled';
import PublicNav from './styled/PublicNav';

const index = ({ children, onChange, value }) => {
  return (
    <Navbar>
      <Wrapper className="container">
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput onChange={onChange} value={value} />
        <PublicNav />
      </Wrapper>
    </Navbar>
  );
};

export default index;
