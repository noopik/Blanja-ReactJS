import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { moneyFormatter } from '../../utils';

const CheckoutPage = () => {
  const [showModalAddress, setShowModalAddress] = useState(false);
  const [showModalBuy, setShowModalBuy] = useState(false);
  const { cartReducer: cartState, userReducer: userState } = useSelector(
    (state) => state
  );
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
                  {userState.name}
                </Heading>
                <Text>
                  {userState?.address
                    ? userState?.address
                    : 'Fill in your address first'}
                </Text>
                <div className="btn-wrapper">
                  <Button onClick={() => setShowModalAddress(true)}>
                    Choose Another Address
                  </Button>
                </div>
              </CardWrapper>
              {cartState.data.length > 0 &&
                cartState.data.map((product) => (
                  <CheckoutDetail
                    body
                    nameProduct={product.nameProduct}
                    store="IStanbul"
                    total={`Rp. ${moneyFormatter.format(product.price)}`}
                    image={product.imageProduct[0]}
                    checkout
                  />
                ))}
            </AsideLeft>
            <AsideRight className="right">
              <CardCheckout
                pricing={cartState?.pricing}
                checkout
                buyAction={() => setShowModalBuy(true)}
              />
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
