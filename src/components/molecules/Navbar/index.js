import React, { useState } from 'react';
import styled from 'styled-components';
import {} from '../../molecules';
import { BrandLogo, ButtonIcon, ButtonTogller, SearchInput } from '../../atoms';
import {} from '../../atoms/Typography';
import { Navbar, Wrapper } from './styled';
import PublicNav from './styled/PublicNav';
import UserNav from './styled/UserNav';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import NavbarCollapse from '../NavbarCollapse';
import { useEffect } from 'react';

const NavbarComponent = ({ onChange, value, session }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // const [showOnClick, setShowOnClick] = useState(false);

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
  // console.log('history', history);
  const handleShowNavCollapes = () => {
    // setShowOnClick(true);
    // console.log(showOnClick);
    dispatch({ type: 'SET_NAVCOLLAPSE', value: true });
  };

  return (
    <Navbar>
      <Wrapper>
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput
          onChange={(e) => handleSearch(e)}
          placeholder="Mau cari aku atau dia ?"
          session={session}
          actionSearch={actionSearch}
        />
        {session === 'public' && <PublicNav />}
        {session !== 'public' && <UserNav />}
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
