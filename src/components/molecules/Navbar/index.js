import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { BrandLogo, ButtonIcon, SearchInput } from '../../atoms';
import {} from '../../atoms/Typography';
import {} from '../../molecules';
import AlertVerification from '../AlertVerification/AlertVerification';
import NavbarCollapse from '../NavbarCollapse';
import { Navbar, Wrapper } from './styled';
import PublicNav from './styled/PublicNav';
import UserNav from './styled/UserNav';

const NavbarComponent = ({ onChange, value, session }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const userState = useSelector((state) => state.userReducer);

  let onSearch = '';
  const handleSearch = (e) => {
    onSearch = {
      keyword: e.target.value,
    };
    dispatch({ type: 'SET_SEARCHING', value: onSearch });
    location.search = onSearch.keyword;
  };

  const actionSearch = () => {
    history.push(`/products?src=${onSearch.keyword}`, onSearch.keyword);
    dispatch({ type: 'SET_SEARCHING', value: '' });
  };
  const handleShowNavCollapes = () => {
    dispatch({ type: 'SET_NAVCOLLAPSE', value: true });
  };
  return (
    <Navbar>
      <AlertVerification />
      <Wrapper>
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput
          onChange={(e) => handleSearch(e)}
          placeholder=""
          session={session}
          actionSearch={actionSearch}
        />
        {session === 'public' && <PublicNav />}
        {session !== 'public' && (
          <UserNav
            avatar={`${process.env.REACT_APP_API_SERVER}/files/${userState.imageProfile}`}
          />
        )}
        <ButtonIcon onClick={handleShowNavCollapes} />
        <NavbarCollapse />
      </Wrapper>
    </Navbar>
  );
};

export default NavbarComponent;

NavbarComponent.defaultProps = {
  session: 'public',
};
