import React from 'react';
import { useDispatch } from 'react-redux';
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
  // const location = useLocation();
  // const history = useHistory();
  //   const userState = useSelector((state) => state.userReducer.data);
  // const { isShow: loadingState } = useSelector((state) => state.loadingReducer);

  // const global = useSelector((state) => state);
  // console.log(loadingState);

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
  // console.log('session:', session);
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
        {session !== 'public' && <UserNav />}
        <ButtonIcon onClick={handleShowNavCollapes} />
        <NavbarCollapse session={session} />
      </Wrapper>
    </Navbar>
  );
};

export default NavbarComponent;

NavbarComponent.defaultProps = {
  session: 'public',
};
