import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  AsideLeft,
  AsideRight,
  Button,
  CardWrapper,
} from '../../components/atoms';
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
  Modal,
  Navbar,
} from '../../components/molecules';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  // console.log('numSelected', numSelected);
  // SHOW MODAL
  const handleModalOpen = () => {
    console.log(1);
    dispatch({ type: 'SET_MODAL', value: true });
  };
  useEffect(() => {
    document.title = 'Blanja | Checkout';
  });

  return (
    <>
      <Navbar session="user" />
      <MainContent className="checkout-page">
        <SectionContent>
          <HeaderSection title="Checkout" />
          <AsideContent>
            <AsideLeft className="left">
              <Heading as={3} font="medium" mb="24" mt="2">
                Shipping Address
              </Heading>
              <CardWrapper className="detail-user">
                <Heading as={3} font="medium">
                  Andreas Jane
                </Heading>
                <Text>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                  16] Sokaraja, Kab. Banyumas, 53181
                </Text>
                <div className="btn-wrapper">
                  <Button onClick={handleModalOpen}>
                    Choose Another Address
                  </Button>
                </div>
              </CardWrapper>
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
