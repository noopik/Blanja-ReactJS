import React, { useEffect, useState } from 'react';
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
  ModalChooseAddress,
  ModalPayment,
  Navbar,
} from '../../components/molecules';

const CheckoutPage = () => {
  const [showModalAddress, setShowModalAddress] = useState(false);
  const [showModalBuy, setShowModalBuy] = useState(false);

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
                  <Button onClick={() => setShowModalAddress(true)}>
                    Choose Another Address
                  </Button>
                </div>
              </CardWrapper>
              <CheckoutDetail body checkout />
              <CheckoutDetail body checkout />
            </AsideLeft>
            <AsideRight className="right">
              <CardCheckout checkout buyAction={() => setShowModalBuy(true)} />
            </AsideRight>
          </AsideContent>
        </SectionContent>
      </MainContent>
      {/* Modal Choose Another Address */}
      <Modal
        showModal={showModalAddress}
        closeModal={() => setShowModalAddress(false)}
        title="Choose Another Address"
        size="large"
      >
        <ModalChooseAddress />
      </Modal>
      {/* Modal Buy */}
      <Modal
        showModal={showModalBuy}
        closeModal={() => setShowModalBuy(false)}
        title="Payment"
      >
        <ModalPayment />
      </Modal>
    </>
  );
};

export default CheckoutPage;
