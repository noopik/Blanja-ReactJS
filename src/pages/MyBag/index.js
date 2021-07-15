import React, { useEffect } from 'react';
import { AsideLeft, AsideRight } from '../../components/atoms';
import {
  AsideContent,
  MainContent,
  SectionContent,
} from '../../components/Layouts';
import {
  CardCheckout,
  CheckoutDetail,
  HeaderSection,
  Navbar,
} from '../../components/molecules';

const MyBag = () => {
  useEffect(() => {
    document.title = 'Blanja | My Bag';
  });
  return (
    <>
      <Navbar session="user" />
      <MainContent>
        <SectionContent>
          <HeaderSection title="My Bag" />
          <AsideContent>
            <AsideLeft className="left">
              <CheckoutDetail heading />
              <CheckoutDetail body />
              <CheckoutDetail />
            </AsideLeft>
            <AsideRight className="right">
              <CardCheckout />
            </AsideRight>
          </AsideContent>
        </SectionContent>
      </MainContent>
    </>
  );
};

export default MyBag;
