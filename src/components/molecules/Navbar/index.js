import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { searchAction } from '../../../redux/actions/searchAction';
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
  const global = useSelector((state) => state);
  console.log(global);

  // const handleSearch = (e) => {
  //   onSearch = {
  //     keyword: e.target.value,
  //   };
  //   dispatch(searchAction(e.target.value));
  //   // dispatch({ type: 'SET_SEARCHING', value: onSearch });
  //   location.search = onSearch.keyword;
  // };

  const handleShowNavCollapes = () => {
    dispatch({ type: 'SET_NAVCOLLAPSE', value: true });
  };

  return (
    <Navbar>
      <AlertVerification />
      <Wrapper>
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput
          // onChange={(e) => handleSearch(e)}
          placeholder=""
          session={session}
        />
        {session === 'public' && <PublicNav />}
        {session !== 'public' && <UserNav avatar={userState.image} />}
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
