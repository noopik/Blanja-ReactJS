import React from 'react';
import { AsideLeft, AsideRight } from '../../components/atoms';
import { Heading, Text } from '../../components/atoms/Typography';
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

const CheckoutPage = () => {
  return (
    <>
      <Navbar session="user" />
      <MainContent>
        <SectionContent>
          <HeaderSection title="Checkout" />
          <AsideContent>
            <AsideLeft className="left">
              <Heading as={3} font="regular" mb="24" mt="2">
                Shipping Address
              </Heading>
              <CheckoutDetail body checkout />
              <CheckoutDetail body checkout />
            </AsideLeft>
            <AsideRight className="right">
              <CardCheckout checkout />
            </AsideRight>
          </AsideContent>
        </SectionContent>
      </MainContent>
    </>
  );
};

export default CheckoutPage;
