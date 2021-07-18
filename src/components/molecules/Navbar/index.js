import React, { useState } from 'react';
import styled from 'styled-components';
import {} from '../../molecules';
import { BrandLogo, SearchInput } from '../../atoms';
import {} from '../../atoms/Typography';
import { Navbar, Wrapper } from './styled';
import PublicNav from './styled/PublicNav';
import UserNav from './styled/UserNav';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const NavbarComponent = ({ onChange, value, session }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  let onSearch = '';
  const handleSearch = (e) => {
    onSearch = {
      keyword: e.target.value,
    };
    // console.log(onSearch);
    dispatch({ type: 'SET_SEARCHING', value: onSearch });
    location.search = onSearch.keyword;
    // console.log(e.target.value);
  };

  const actionSearch = () => {
    history.push(`/products?src=${onSearch.keyword}`, onSearch.keyword);
    dispatch({ type: 'SET_SEARCHING', value: '' });
  };
  console.log('history', history);

  return (
    <Navbar>
      <Wrapper className="container">
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput
          onChange={(e) => handleSearch(e)}
          placeholder="Mau cari aku atau dia ?"
          session={session}
          actionSearch={actionSearch}
        />
        {session === 'public' && <PublicNav />}
        {session === 'user' || (session === 'seller' && <UserNav />)}
      </Wrapper>
    </Navbar>
  );
};

export default NavbarComponent;

NavbarComponent.defaultProps = {
  session: 'public',
};
